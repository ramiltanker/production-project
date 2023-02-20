import { CSSProperties, FC } from 'react';
import styles from './Skeleton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className, height, width, border }) => {
  const stylesObj: CSSProperties = {
    width,
    height,
    borderRadius: border
  };
  return <div className={classNames(styles.skeleton, {}, [className])} style={stylesObj}></div>;
};

export { Skeleton };
