import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStateError } from './getLoginStateError';

describe('getLoginStateError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'test error'
      }
    };

    expect(getLoginStateError(state as StateSchema)).toEqual('test error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginStateError(state as StateSchema)).toEqual(undefined);
  });
});
