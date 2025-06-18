// src/App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Layout from './components/layout/Layout';
import './App.css';

export default function App() {
  const location = useLocation();

  // paths where layout (sidebar/navbar) should not show
  const noLayout = ['/login', '/signup', '/userdashboard'];

  const isLayoutVisible = !noLayout.includes(location.pathname);

  return (
    <>
      {isLayoutVisible ? (
        <Layout>
          <AppRoutes />
        </Layout>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}
