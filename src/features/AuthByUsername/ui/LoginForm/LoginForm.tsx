import { FC, memo, useCallback, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginStateUsername } from 'features/AuthByUsername/model/selectors/getLoginStateUsername/getLoginStateUsername';
import { getLoginStatePassword } from 'features/AuthByUsername/model/selectors/getLoginStatePassword/getLoginStatePassword';
import { getLoginStateIsLoading } from 'features/AuthByUsername/model/selectors/getLoginStateIsLoading/getLoginStateIsLoading';
import { getLoginStateError } from 'features/AuthByUsername/model/selectors/getLoginStateError/getLoginStateError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { wrapAsyncFunction } from 'shared/lib/wrappedFunc/intentionalyFloatingPromiseReturn/intentionalyFloatingPromiseReturn';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginStateUsername);
  const password = useSelector(getLoginStatePassword);
  const isLoading = useSelector(getLoginStateIsLoading);
  const error = useSelector(getLoginStateError);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        <Input
          placeholder={t('Введите пароль')}
          className={styles.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.loginBtn}
          onClick={wrapAsyncFunction(onLoginClick)}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
