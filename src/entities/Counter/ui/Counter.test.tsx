import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } }
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('Counter click on increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } }
    });
    const incrementButton = screen.getByTestId('increment-btn');
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });

  test('Counter click on decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } }
    });
    const decrementButton = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });
});
