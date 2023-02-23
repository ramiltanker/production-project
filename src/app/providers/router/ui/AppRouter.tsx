import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const { path, element, authOnly } = route;

    const jsxElement = <Suspense fallback={<PageLoader />}>{element}</Suspense>;
    return <Route key={path} path={path} element={authOnly ? <RequireAuth>{jsxElement}</RequireAuth> : jsxElement} />;
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});

export { AppRouter };
