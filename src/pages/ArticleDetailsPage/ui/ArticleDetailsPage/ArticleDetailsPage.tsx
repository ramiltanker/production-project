import { ArticleDetails, ArticleList, getArticleDetailsData } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from '../../model/selectors/commetns';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getCommentsByArticleId } from '../../model/services/getCommentsByArticleId/getCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import styles from './ArticleDetailsPage.module.scss';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { getUserAuthData } from 'entities/User';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useInitialEffect(() => {
    dispatch(getCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return <Page className={classNames('', {}, [className])}>{t('Статья не найдена')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.SIZE_L} title={t('Рекомендуем')} className={styles.commentsTitle} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendations}
          target="_blank"
        />
        <Text size={TextSize.SIZE_L} title={t('Комментарии')} className={styles.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
