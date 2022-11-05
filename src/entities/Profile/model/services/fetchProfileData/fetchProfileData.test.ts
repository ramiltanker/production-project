import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from '../../../../../entities/User';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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

describe('fetchProfileData', () => {
  test('success get profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

    const result = await thunk.callThunk();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error get profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
