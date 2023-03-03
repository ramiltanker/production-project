import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollSaveScrollData = (state: StateSchema) => state.scrollSave.scroll;

export const getScrollSaveByPath = createSelector(
  getScrollSaveScrollData,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
