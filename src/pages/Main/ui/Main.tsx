import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  );
};

export default Main;
