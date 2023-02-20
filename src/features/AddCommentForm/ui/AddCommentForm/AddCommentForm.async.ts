import { lazy } from 'react';

const AddCommentFormAsync = lazy(async () => await import('./AddCommentForm'));

export { AddCommentFormAsync as AddCommentForm };
