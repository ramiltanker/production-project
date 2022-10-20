import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return value key of counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 1 }
    };
    expect(getCounterValue(state as StateSchema)).toEqual(1);
  });
});
