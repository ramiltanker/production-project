import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/commetns';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/getCommentsByArticleId/getCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useInitialEffect(() => {
    dispatch(getCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={styles.commentsTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
