import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';

export const getUserInited = createSelector(getUser, (state) => state._inited);
