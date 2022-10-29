import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStatePassword } from './getLoginStatePassword';

describe('getLoginStatePassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'Test Password'
      }
    };

    expect(getLoginStatePassword(state as StateSchema)).toEqual('Test Password');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginStatePassword(state as StateSchema)).toEqual('');
  });
});
