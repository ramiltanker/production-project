import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { getUser } from 'entities/User';
import { getCommentsByArticleId } from '../getCommentsByArticleId/getCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsPage/addCommentForArticle',
  async (commentText, { rejectWithValue, dispatch, extra, getState }) => {
    const userData = getUser(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !commentText || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.authData?.id,
        text: commentText
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(getCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
