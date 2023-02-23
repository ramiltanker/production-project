import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from '../../../../../entities/User';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('success get next articles page', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
        view: ArticleView.SMALL,
        limit: 4,
        ids: [],
        entities: {}
      }
    });
    thunk.api.get.mockReturnValue(Promise.resolve());

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 2 });
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: false,
        view: ArticleView.SMALL,
        limit: 4,
        ids: [],
        entities: {}
      }
    });
    thunk.api.get.mockReturnValue(Promise.resolve());

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('data in not loaded', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        isLoading: true,
        error: undefined,
        page: 1,
        hasMore: true,
        view: ArticleView.SMALL,
        limit: 4,
        ids: [],
        entities: {}
      }
    });
    thunk.api.get.mockReturnValue(Promise.resolve());

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
