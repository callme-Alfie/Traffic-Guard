// src/components/layout/UnifiedLayout.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu, Search, Bell, Sun, Moon,
  Home, Monitor, AlertTriangle, Activity, FileText,
  Megaphone, UploadCloud, Server, Calendar
} from 'lucide-react';
import '../../styles/Sidebar.css';

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`layout ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar__logo">
          <Activity size={24} />
          {!collapsed && <span>TRAFFIGUARD</span>}
        </div>

        <nav className="sidebar__nav">
          <NavLink to="/dashboard" className="sidebar__item">
            <Home size={18} /> {!collapsed && 'Dashboard'}
          </NavLink>
          <NavLink to="/admin/monitoring" className="sidebar__item">
            <Monitor size={18} /> {!collapsed && 'Real-Time Monitoring'}
          </NavLink>
          <NavLink to="/admin/incidents" className="sidebar__item">
            <AlertTriangle size={18} /> {!collapsed && 'Incident Management'}
          </NavLink>
          <NavLink to="/admin/prediction" className="sidebar__item">
            <Activity size={18} /> {!collapsed && 'Accident Prediction'}
          </NavLink>
          <NavLink to="/admin/policies" className="sidebar__item">
            <FileText size={18} /> {!collapsed && 'Policy Recommendations'}
          </NavLink>
          <NavLink to="/admin/awareness" className="sidebar__item">
            <Megaphone size={18} /> {!collapsed && 'Public Awareness'}
          </NavLink>
          <NavLink to="/admin/upload" className="sidebar__item">
            <UploadCloud size={18} /> {!collapsed && 'Upload Dataset'}
          </NavLink>
          <NavLink to="/admin/integrations" className="sidebar__item">
            <Server size={18} /> {!collapsed && 'External Integrations'}
          </NavLink>
          <NavLink to="/admin/reports" className="sidebar__item">
            <Calendar size={18} /> {!collapsed && 'Reports & Analytics'}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content + Topbar */}
      <div className="main-layout">
        <header className="navbar">
          <button className="navbar__toggle" onClick={() => setCollapsed(!collapsed)}>
            <Menu size={20} />
          </button>

          <div className="navbar__search">
            <Search size={16} />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="navbar__right">
            <Bell size={20} />
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="navbar__profile-circle">A</div>
          </div>
        </header>

        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
}
