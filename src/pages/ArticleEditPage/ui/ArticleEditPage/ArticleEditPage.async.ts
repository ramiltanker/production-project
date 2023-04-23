import { lazy } from 'react';

const ArticleEditAsyncPage = lazy(async () => await import('./ArticleEditPage'));

export { ArticleEditAsyncPage as ArticleEditPage };
