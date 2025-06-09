import React from 'react';
import { 
  Home, Monitor, AlertTriangle, Activity, FileText, Megaphone, 
  UploadCloud, Server, Calendar, User, ChevronDown 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        {/* Logo */}
        <div className="sidebar__logo">
          <Activity size={24} />
          <span>TRAFFIGUARD</span>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          <p className="sidebar__section">Dashboard</p>
          <NavLink to="/dashboard"      className="sidebar__item">
            <Home   size={18} /> Dashboard
          </NavLink>
          <NavLink to="/admin/monitoring" className="sidebar__item">
            <Monitor    size={18} /> Real-Time Monitoring
          </NavLink>
          <NavLink to="/admin/incidents"  className="sidebar__item">
            <AlertTriangle size={18} /> Incident Management
          </NavLink>
          <NavLink to="/admin/prediction" className="sidebar__item">
            <Activity     size={18} /> Accident Prediction
          </NavLink>
          <NavLink to="/admin/policies"   className="sidebar__item">
            <FileText size={18} /> Policy Recommendations
          </NavLink>
          <NavLink to="/admin/awareness"  className="sidebar__item">
            <Megaphone size={18} /> Public Awareness
          </NavLink>

          <p className="sidebar__section">Data Management</p>
          <NavLink to="/admin/upload"       className="sidebar__item">
            <UploadCloud size={18} /> Upload Dataset
          </NavLink>
          <NavLink to="/admin/integrations" className="sidebar__item">
            <Server      size={18} /> External Integrations
          </NavLink>
          <NavLink to="/admin/reports"      className="sidebar__item">
            <Calendar    size={18} /> Reports & Analytics
          </NavLink>
        </nav>
      </div>

      {/* User Profile at bottom */}
      <div className="sidebar__user">
        <User size={20} />
        <div className="sidebar__user-info">
          <span className="sidebar__user-name">RSAI Admin</span>
          <span className="sidebar__user-email">alphansodennis@roadsafe.ai</span>
        </div>
        <ChevronDown size={16} />
      </div>
    </aside>
  );
}
