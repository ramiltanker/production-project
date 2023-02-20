import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={classNames(styles.card, {}, [className])} {...props}>
      {children}
    </div>
  );
};

export { Card };
