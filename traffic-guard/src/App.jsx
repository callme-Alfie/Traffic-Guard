// src/App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar  from './components/Navbar.jsx';
import AppRoutes from './router/AppRoutes.jsx';
import './App.css';

export default function App() {
  const location = useLocation();

  // define which paths should *not* show the sidebar
  const noSidebar = ['/login', '/signup', '/dashboard'];

  const showSidebar = !noSidebar.includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />}

      <div className="main-content">
        {/* you can also hide navbar on certain routes if you like */}
        <Navbar />

        <div className="content-area">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}
