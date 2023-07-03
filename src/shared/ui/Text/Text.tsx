import { FC } from 'react';
import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary_inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  SIZE_S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.SIZE_S]: 'h3',
  [TextSize.SIZE_M]: 'h2',
  [TextSize.SIZE_L]: 'h1'
};

const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.SIZE_M
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  const mods = {
    [styles[theme]]: theme,
    [styles[align]]: align,
    [styles[size]]: size
  };

  return (
    <div className={classNames(styles.box, mods, [className])}>
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
