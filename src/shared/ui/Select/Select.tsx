import { ChangeEvent, FC, memo, useCallback, useMemo } from 'react';
import styles from './Select.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: Array<SelectOption<T>>;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select = <T extends string>({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {
  const mods: Mods = {};

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  const optionList = useMemo(() => {
    return options?.map(({ content, value }) => {
      return (
        <option className={styles.option} value={value} key={value}>
          {content}
        </option>
      );
    });
  }, [options]);

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={styles.select} onChange={onChangeHandler} value={value}>
        {optionList}
      </select>
    </div>
  );
};

export { Select };
