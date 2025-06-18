// components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Monitor, AlertTriangle, Activity, FileText, Megaphone,
  UploadCloud, Server, Calendar
} from 'lucide-react';
import '../../styles/Sidebar.css';

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div>
        <div className="sidebar__logo">
          <Activity size={24} />
          {!collapsed && <span>TRAFFIGUARD</span>}
        </div>

        <nav className="sidebar__nav">
          <NavLink to="/dashboard" className="sidebar__item">
            <Home size={18} /> {!collapsed && 'Dashboard'}
          </NavLink>
          <NavLink to="/admin/monitoring" className="sidebar__item">
            <Monitor size={18} /> {!collapsed && 'Live Traffic Maps'}
          </NavLink>
          <NavLink to="/admin/incidents" className="sidebar__item">
            <AlertTriangle size={18} /> {!collapsed && 'Incident Dashboard'}
          </NavLink>
          <NavLink to="/admin/alerts" className="sidebar__item">
            <AlertTriangle size={18} /> {!collapsed && 'Alert Center'}
          </NavLink>
          <NavLink to="/admin/messages" className="sidebar__item">
            <FileText size={18} /> {!collapsed && 'Message'}
          </NavLink>
          <NavLink to="/admin/cameras" className="sidebar__item">
            <Monitor size={18} /> {!collapsed && 'Camera Feeds'}
          </NavLink>
          <NavLink to="/admin/settings" className="sidebar__item">
            <Calendar size={18} /> {!collapsed && 'Settings'}
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
