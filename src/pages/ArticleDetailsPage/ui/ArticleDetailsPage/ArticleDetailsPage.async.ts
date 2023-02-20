import { lazy } from 'react';

const ArticleDetailsAsyncPage = lazy(async () => await import('./ArticleDetailsPage'));

export { ArticleDetailsAsyncPage as ArticleDetailsPage };
