import { FC, memo } from 'react';
import styles from './Icon.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo(({ className, SVG }: IconProps) => {
  return <SVG className={classNames(styles.icon, {}, [className])} />;
});

export { Icon };
