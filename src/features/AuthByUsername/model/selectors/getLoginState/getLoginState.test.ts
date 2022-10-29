import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        password: 'Test Password',
        username: 'Test Username',
        error: 'test error'
      }
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      isLoading: false,
      password: 'Test Password',
      username: 'Test Username',
      error: 'test error'
    });
  });
});
