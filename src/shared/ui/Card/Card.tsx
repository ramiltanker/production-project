import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

const Card: FC<CardProps> = ({ className, children, theme = CardTheme.NORMAL, ...props }) => {
  return (
    <div className={classNames(styles.card, {}, [className, styles[theme]])} {...props}>
      {children}
    </div>
  );
};

export { Card };
