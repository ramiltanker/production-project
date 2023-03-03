import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

interface InitArticlesPageProps {
  searchParams?: URLSearchParams;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, InitArticlesPageProps, ThunkConfig<string>>(
  'articlesPages/initArticlesPage',
  async ({ searchParams }, { rejectWithValue, dispatch, extra, getState }) => {
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      if (searchParams) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');

        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl));
        }
      }
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
