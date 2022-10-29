import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: ''
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username123'))).toEqual({
      username: 'username123'
    });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: ''
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password123'))).toEqual({
      password: 'password123'
    });
  });
});
