// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function PrivateRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // 🔍 Debug
  console.log('🔒 PrivateRoute', {
    path: location.pathname,
    loading,
    user,
    requiredRole
  });

  if (loading) return null;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return children;
}
