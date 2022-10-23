import { FC } from 'react';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input placeholder={t('Введите имя пользователя')} autofocus={true} className={styles.input} />
      <Input placeholder={t('Введите пароль')} className={styles.input} />
      <Button className={styles.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};

export { LoginForm };
