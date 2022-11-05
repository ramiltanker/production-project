import { getUserAuthData } from 'entities/User';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => {
          return <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />;
        })}
      </Routes>
    </Suspense>
  );
});

export { AppRouter };
