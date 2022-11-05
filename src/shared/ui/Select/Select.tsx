import { ChangeEvent, FC, memo, useCallback, useMemo } from 'react';
import styles from './Select.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
  const mods: Mods = {};

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
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
});

export { Select };
