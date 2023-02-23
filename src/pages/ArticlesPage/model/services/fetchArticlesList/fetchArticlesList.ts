import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page: number;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPages/fetchArticlesList',
  async ({ page = 1 }, { rejectWithValue, dispatch, extra, getState }) => {
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
