import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

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

const form = {
  age: 19,
  avatar: '',
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  firstname: 'Ramil123',
  lastname: 'Ashrafulin123',
  username: 'NiceGuyg'
};

describe('loginSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      form,
      validateError: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USER_DATA]
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateError: undefined
    });
  });

  test('test update', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ ...data, age: 20 }))).toEqual({
      form: { ...data, age: 20 }
    });
  });

  test('test updateProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.INCORRECT_AGE]
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateError: undefined
    });
  });

  test('test updateProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateError: undefined
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      data: data,
      form: data,
      readonly: true,
      validateError: undefined
    });
  });
});
