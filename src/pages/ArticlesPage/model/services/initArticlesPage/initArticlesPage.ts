import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPages/initArticlesPage',
  async (_, { rejectWithValue, dispatch, extra, getState }) => {
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
