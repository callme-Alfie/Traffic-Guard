// src/pages/Login.jsx

// export default function Login() {
// + console.log('🏷️ Login component rendered');
//   return (
//     <div>…</div>
//   );
// }

// console.log('🔑 Login rendered, user from context:', useAuth());

import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { login, signup } from '../services/authServices.js';




// const location = useLocation();
// const from = location.state?.from?.pathname || (user.role === 'admin' ? '/admin/landing' : '/dashboard');

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();     // pull login action from context

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const user = await login(form);  // context handles token persistence
      navigate(user.role === 'admin' ? '/admin/landing' : '/dashboard');
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
    
  };

  return (
    <div className="main-container">
      <div className="login-box">
        <div className="logo">
          <h2>TrafficGuard</h2>
        </div>
        <h1>Welcome Back</h1>

        {error && <p className="error">{error}</p>}

        <form className="form-div" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="links">
            <span className="forgot">Trouble signing in?</span>
            <Link to="/signup">
              <span>Not a member yet?</span>
            </Link>
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
