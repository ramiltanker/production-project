import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName', () => {
  test('should return profile data firstname', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          firstname: 'Ramil'
        }
      }
    };
    expect(getProfileFirstName(state as StateSchema)).toBe('Ramil');
  });
});
