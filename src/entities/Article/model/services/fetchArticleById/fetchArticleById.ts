import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${id}`, {
        params: {
          _expand: 'user'
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
