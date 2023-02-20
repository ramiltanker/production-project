import { FC, memo, ReactNode, useCallback } from 'react';
import styles from './Code.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import { useTranslation } from 'react-i18next';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Icon } from '../Icon/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

const Code = memo(({ className, text }: CodeProps) => {
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <Icon SVG={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

export { Code };
