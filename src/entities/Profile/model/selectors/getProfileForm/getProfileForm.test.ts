import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          age: 19,
          firstname: 'ramil',
          lastname: 'ashrafulin'
        }
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual({
      age: 19,
      firstname: 'ramil',
      lastname: 'ashrafulin'
    });
  });
});
