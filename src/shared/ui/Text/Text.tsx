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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const Text: FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.CENTER }) => {
  const mods = {
    [styles[theme]]: theme,
    [styles[align]]: align
  };

  return (
    <div className={classNames(styles.box, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
