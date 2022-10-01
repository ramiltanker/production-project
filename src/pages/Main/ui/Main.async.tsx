import { lazy } from 'react';

const MainPageAsync = lazy(async () => await import('./Main'));

export default MainPageAsync;
