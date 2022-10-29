import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginStateUsername = createSelector(getLoginState, (loginState) => loginState?.username || '');
