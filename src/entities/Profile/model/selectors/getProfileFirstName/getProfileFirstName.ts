import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileFirstName = createSelector(getProfileData, (state) => state?.firstname);
