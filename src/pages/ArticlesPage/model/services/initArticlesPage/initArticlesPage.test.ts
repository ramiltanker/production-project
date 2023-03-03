import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('state is alredy inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
        view: ArticleView.SMALL,
        limit: 4,
        ids: [],
        entities: {},
        _inited: true
      }
    });

    const result = await thunk.callThunk({});

    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test('state is not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
        view: ArticleView.SMALL,
        limit: 4,
        ids: [],
        entities: {},
        _inited: false
      }
    });

    const result = await thunk.callThunk({});

    expect(thunk.dispatch).toBeCalledTimes(4);
  });
});
