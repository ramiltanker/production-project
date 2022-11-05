import { Country } from 'entities/Country/model/types/country';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

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
    <Select
      value={value}
      onChange={onChangeHandler}
      label={t('Страна')}
      options={options}
      readonly={readonly}
      className={classNames('', {}, [className])}
    />
  );
});

export { CountrySelect };
