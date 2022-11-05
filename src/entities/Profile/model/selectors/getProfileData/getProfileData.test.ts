import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../../types/profile';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          age: 4,
          avatar: '',
          city: 'Moscow',
          country: Country.RUSSIA,
          currency: Currency.RUB,
          firstname: 'Ramil',
          lastname: 'Ashrafulin',
          username: 'niceguy'
        }
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual({
      age: 4,
      avatar: '',
      city: 'Moscow',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      firstname: 'Ramil',
      lastname: 'Ashrafulin',
      username: 'niceguy'
    });
  });
});
