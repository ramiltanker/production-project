import { Currency } from '../../model/types/currency';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];

const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      defaultValue={t('Укажите валюту')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction="top"
      label={t('Укажите валюту')}
    />
  );
  // return (
  //   <Select
  //     value={value}
  //     onChange={onChangeHandler}
  //     label={t('Страна')}
  //     options={options}
  //     readonly={readonly}
  //     className={classNames('', {}, [className])}
  //   />
  // );
});

export { CurrencySelect };
