import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
}

const Button: FC<ButtonProps> = ({ className = '', children, theme = '', square = false, size, ...buttonProps }) => {
  const mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true
  };

  return (
    <button type="button" className={classNames(styles.button, mods, [className])} {...buttonProps}>
      {children}
    </button>
  );
};

export { Button };
