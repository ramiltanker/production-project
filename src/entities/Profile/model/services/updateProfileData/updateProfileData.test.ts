import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from '../../../../User';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
  age: 19,
  avatar: '',
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  firstname: 'Ramil',
  lastname: 'Ashrafulin',
  username: 'NiceGuyg'
};

describe('updateProfileData', () => {
  test('success put profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));

    const result = await thunk.callThunk();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error put profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('user error put profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, firstname: '', lastname: '', age: undefined } }
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
  });
});
