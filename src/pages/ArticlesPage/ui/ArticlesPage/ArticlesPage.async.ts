import { lazy } from 'react';

const ArticlesAsyncPage = lazy(async () => await import('./ArticlesPage'));

export { ArticlesAsyncPage as ArticlesPage };
