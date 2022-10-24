import { FC, memo, useCallback } from 'react';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неверное имя пользователя или пароль')} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите имя пользователя')}
        autofocus={true}
        className={styles.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input placeholder={t('Введите пароль')} className={styles.input} onChange={onChangePassword} value={password} />
      <Button theme={ButtonTheme.OUTLINE} className={styles.loginBtn} onClick={onLoginClick} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});

export { LoginForm };
