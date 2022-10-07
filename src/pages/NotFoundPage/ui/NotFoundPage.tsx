import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('not-found-page');

  return (
    <div className={classNames(styles.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export { NotFoundPage };
