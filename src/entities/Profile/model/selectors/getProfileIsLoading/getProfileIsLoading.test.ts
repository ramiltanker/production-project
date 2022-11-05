import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return profile isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(false);
  });
});
