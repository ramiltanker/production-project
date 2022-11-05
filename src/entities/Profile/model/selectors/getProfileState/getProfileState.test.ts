import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileState } from './getProfileState';

describe('getProfileState.test', () => {
  test('should return profile state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: undefined,
        error: undefined,
        isLoading: false,
        readonly: true
      }
    };
    expect(getProfileState(state as StateSchema)).toEqual({
      data: undefined,
      error: undefined,
      isLoading: false,
      readonly: true
    });
  });
});
