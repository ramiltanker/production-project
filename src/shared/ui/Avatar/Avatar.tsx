import { CSSProperties, FC, useMemo } from 'react';
import styles from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const stylesInline = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    };
  }, [size]);

  return <img src={src} alt={alt} className={classNames(styles.avatar, {}, [className])} style={stylesInline} />;
};

export { Avatar };
