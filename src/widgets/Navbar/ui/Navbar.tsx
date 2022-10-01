import { FC } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
        <AppLink
          to="/"
          className={classNames(styles.mainLink)}
          theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
