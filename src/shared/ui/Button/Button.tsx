import { ButtonHTMLAttributes, FC, memo } from 'react';
import styles from './Button.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = memo(
  ({
    className = '',
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    disabled,
    ...buttonProps
  }: ButtonProps) => {
    const mods: Mods = {
      [styles[theme]]: true,
      [styles.square]: square,
      [styles[size]]: true,
      [styles.disabled]: disabled
    };

    return (
      <button
        type="button"
        className={classNames(styles.button, mods, [className])}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

export { Button };
