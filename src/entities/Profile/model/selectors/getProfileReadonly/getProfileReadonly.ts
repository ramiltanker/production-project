import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileReadonly = createSelector(getProfileState, (state) => state?.readonly);
