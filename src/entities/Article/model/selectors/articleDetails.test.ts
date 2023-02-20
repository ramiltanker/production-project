import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('articleDetails.test', () => {
  test('should return ArticleDetails Data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '1',
          title: 'title'
        }
      }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual({
      id: '1',
      title: 'title'
    });
  });

  test('should return ArticleDetails IsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });

  test('should return ArticleDetails Data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'ERROR'
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toBe('ERROR');
  });
});
