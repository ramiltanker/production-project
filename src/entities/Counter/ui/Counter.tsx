import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { useTranslation } from 'react-i18next';

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">
        {' '}
        {t('Значение = ')}
        {value}
      </h1>
      <Button onClick={increment} data-testid="increment-btn">
        {t('Увеличить')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t('Уменьшить')}
      </Button>
    </div>
  );
};

export { Counter };
