import { FC } from 'react';
import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text: FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY }) => {
  const mods = {
    [styles[theme]]: theme
  };

  return (
    <div className={classNames(styles.box, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
