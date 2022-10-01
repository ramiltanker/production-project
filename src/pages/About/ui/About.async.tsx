import { lazy } from 'react';

const AboutPageAsync = lazy(async () => await import('./About'));

export default AboutPageAsync;
