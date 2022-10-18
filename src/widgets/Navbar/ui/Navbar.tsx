import { FC, useCallback, useState } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleToggleAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(styles.links)} onClick={handleToggleAuthModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={handleToggleAuthModal}></Modal>
    </div>
  );
};

export { Navbar };
