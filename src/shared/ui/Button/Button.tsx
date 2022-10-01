import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  theme = '',
  ...buttonProps
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...buttonProps}>
      {children}
    </button>
  );
};

export { Button };
