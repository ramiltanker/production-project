import { FC } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
        <AppLink
          to="/"
          className={classNames(styles.mainLink)}
          theme={AppLinkTheme.SECONDARY}>
          {t('Главная')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
