import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('decrement reducer', () => {
    const state: CounterSchema = {
      value: 1
    };

    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 0 });
  });

  test('increment reducer', () => {
    const state: CounterSchema = {
      value: 1
    };

    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 2 });
  });

  test('increment reducer with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
