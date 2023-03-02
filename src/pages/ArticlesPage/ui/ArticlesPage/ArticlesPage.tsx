/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { getArticlesPageLoading, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesPageActions.setView(newView));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page className={classNames(styles.articlesPage, {}, [className])} onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector onViewClick={onChangeView} view={view} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
