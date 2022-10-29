import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginStateIsLoading = createSelector(getLoginState, (loginState) => loginState?.isLoading || false);
