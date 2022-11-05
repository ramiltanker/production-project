import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_AGE', 'INCORRECT_COUNTRY']);
  });
});
