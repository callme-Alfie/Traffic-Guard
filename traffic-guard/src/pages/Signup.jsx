// src/pages/SignUp.jsx
import React, { useState } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();        // pull signup action from context

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      const user = await signup({
        name: form.name,
        email: form.email,
        password: form.password,
        role: 'user'
      });
      // redirect based on role
      navigate(user.role === 'admin' ? '/admin/landing' : '/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="main-container">
      <div className="signup-box">
        <div className="logo">
          <h2>TrafficGuard</h2>
        </div>
        <h1>Create Your Account</h1>

        {error && <p className="error">{error}</p>}

        <form className="form-div" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <div className="links">
          <Link to="/login">
            <span>Already have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
