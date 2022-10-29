import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'));

export default LoginFormAsync;
