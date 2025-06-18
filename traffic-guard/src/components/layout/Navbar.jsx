// components/layout/Navbar.jsx
import React from 'react';
import {
  Search, Bell, Sun, Moon, Menu
} from 'lucide-react';
import '../../styles/Navbar.css';

export default function Navbar({ onToggleSidebar, darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <button onClick={onToggleSidebar} className="navbar__toggle">
          <Menu size={20} />
        </button>
        <span className="navbar__brand">AdminHub</span>
      </div>

      <div className="navbar__center">
        <Search size={16} />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar__right">
        <Bell size={20} />
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="navbar__profile-circle">A</div>
      </div>
    </header>
  );
}
