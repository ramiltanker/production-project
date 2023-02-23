import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPagePage
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPages/fetchNextArticlesPage',
  async (_, { rejectWithValue, dispatch, extra, getState }) => {
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPagePage(getState());
    const isLoading = getArticlesPageLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }
);
