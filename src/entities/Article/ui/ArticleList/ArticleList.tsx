import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import styles from './ArticleList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} key={index} className={styles.card} />);
};

const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={styles.card} key={article.id} target={target} />;
  };

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('Статьи не найдены')} size={TextSize.SIZE_L} />
      </div>
    );
  }

  const Footer = memo(() => {
    if (isLoading) {
      return <>{getSkeletons(view)}</>;
    } else {
      return <></>;
    }
  });

  console.log(view);
  return (
    // <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
    //   {articles.length > 0 ? articles.map(renderArticle) : null}
    //   {isLoading && getSkeletons(view)}
    // </div>
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {view === ArticleView.BIG ? (
        <Virtuoso
          useWindowScroll={true}
          style={{ height: '100%', width: '100%' }}
          data={articles}
          itemContent={(index, data) => renderArticle(data)}
          endReached={onLoadNextPart}
          components={{ Footer }}
        />
      ) : (
        <VirtuosoGrid
          useWindowScroll={true}
          totalCount={articles.length}
          endReached={onLoadNextPart}
          data={articles}
          components={{
            ScrollSeekPlaceholder: () => {
              return <>{getSkeletons(view)}</>;
            }
          }}
          itemContent={(index, data) => renderArticle(data)}
          listClassName={styles.itemsWrapper}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30
          }}
        />
      )}
    </div>
  );
});

export { ArticleList };
