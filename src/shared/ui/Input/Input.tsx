import React, { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, autofocus, readonly, ...otherProps } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);

  const isCaretVisible = isFocused && !readonly;

  const mods: Mods = {};

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autofocus]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleOnChange}
          className={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
      </div>
    </div>
  );
});

export { Input };
