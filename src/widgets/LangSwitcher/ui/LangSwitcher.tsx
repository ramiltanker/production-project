import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/require-await
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
      {t('Язык')}
    </Button>
  );
};
