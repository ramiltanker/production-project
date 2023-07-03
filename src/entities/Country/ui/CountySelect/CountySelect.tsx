import { Country } from '../../model/types/country';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.ARMENIA, content: Country.ARMENIA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.UKRAINE, content: Country.UKRAINE }
];

const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      defaultValue={t('Укажите страну')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction="top"
      label={t('Укажите страну')}
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

export { CountrySelect };
