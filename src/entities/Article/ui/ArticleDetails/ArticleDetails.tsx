import { memo, useCallback } from 'react';
import styles from './ArticleDetails.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import ViewsLogo from 'shared/assets/icons/views.svg';
import DateLogo from 'shared/assets/icons/date.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/Stack';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const isLoading = useSelector(getArticleDetailsIsLoading);
  // const isLoading = true;
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />;
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} border="50%" className={styles.avatar} />
        <Skeleton width={300} height={32} className={styles.title} />
        <Skeleton width={600} height={24} className={styles.skeleton} />
        <Skeleton width="100%" height={200} className={styles.skeleton} />
        <Skeleton width="100%" height={200} className={styles.skeleton} />
      </>
    );
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')}></Text>;
  } else {
    content = (
      <VStack gap="16" className={classNames(styles.articleDetails, {}, [className])}>
        <HStack justify="center" max>
          <Avatar size={200} src={data?.img} className={styles.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Text className={styles.title} title={data?.title} text={data?.subtitle} size={TextSize.SIZE_L} />
          <HStack gap="8" align='center'>
            <Icon SVG={ViewsLogo} className={styles.icon} />
            <Text text={data?.views} />
          </HStack>
          <HStack gap="8" align='center'>
            <Icon SVG={DateLogo} className={styles.icon} />
            <Text text={data?.createdAt} />
          </HStack>
        </VStack>
        {data?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});

export { ArticleDetails };
