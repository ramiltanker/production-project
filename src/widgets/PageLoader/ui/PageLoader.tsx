import { FC } from 'react';
import styles from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export { PageLoader };
