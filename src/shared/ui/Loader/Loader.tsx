import { FC } from 'react';
import styles from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.loader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader };
