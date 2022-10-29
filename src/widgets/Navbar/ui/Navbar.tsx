import { FC, useCallback, useState } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={classNames(styles.navbar)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(styles.links)} onClick={handleLogOut}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(styles.links)} onClick={handleOpenAuthModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseAuthModal} />}
    </div>
  );
};

export { Navbar };
