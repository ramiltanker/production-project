import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStateUsername } from './getLoginStateUsername';

describe('getLoginStateUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Test Username'
      }
    };

    expect(getLoginStateUsername(state as StateSchema)).toEqual('Test Username');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginStateUsername(state as StateSchema)).toEqual('');
  });
});
