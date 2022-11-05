import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData', () => {
  test('success validate profile data', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('error validate profile firstname and lastname', () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('error validate profile age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('error validate profile country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('error validate profile', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
