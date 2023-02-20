import { FC } from 'react';
import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  SIZE_M = 'size_m',
  SIZE_L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string | number;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.SIZE_M
}) => {
  const mods = {
    [styles[theme]]: theme,
    [styles[align]]: align,
    [styles[size]]: size
  };

  return (
    <div className={classNames(styles.box, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
