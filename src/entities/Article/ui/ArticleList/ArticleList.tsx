import { FC } from 'react';
import styles from './ArticleList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} key={index} className={styles.card} />);
};

const ArticleList: FC<ArticleListProps> = ({ className, articles, isLoading, view = ArticleView.SMALL }) => {
  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={styles.card} key={article.id} />;
  };

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export { ArticleList };
