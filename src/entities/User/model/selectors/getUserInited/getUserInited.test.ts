import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited.test', () => {
  test('should return inited', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: false
      }
    };

    expect(getUserInited(state as StateSchema)).toBe(false);
  });
});
