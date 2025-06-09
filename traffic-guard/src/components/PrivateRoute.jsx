// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function PrivateRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // 1️⃣ While auth state is loading, render nothing (or a spinner)
  if (loading) return null;

  // 2️⃣ If not logged in, redirect to login, preserving the intended path
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3️⃣ If a role is required and user doesn’t match, redirect elsewhere
  if (requiredRole && user.role !== requiredRole) {
    // e.g. send to a “not authorized” page or home
    return <Navigate to="/" replace />;
  }

  // 4️⃣ All good—render the protected component
  return children;
}
