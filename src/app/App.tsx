import React, { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
