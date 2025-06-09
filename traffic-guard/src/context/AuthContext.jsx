// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, signup as apiSignup } from '../services/authServices';


// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Provider component
export function AuthProvider({ children }) {
  const [user, setUser]     = useState(null);
  const [token, setToken]   = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount: load from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('tg_token');
    const savedUser  = localStorage.getItem('tg_user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Helper: persist to localStorage
  const persistAuth = (tok, usr) => {
    setToken(tok);
    setUser(usr);
    localStorage.setItem('tg_token', tok);
    localStorage.setItem('tg_user', JSON.stringify(usr));
  };

  // 3️⃣ Auth actions

  const signup = async (data) => {
    const { token: tok, user: usr } = await apiSignup(data);
    persistAuth(tok, usr);
    return usr;
  };

  const login = async (creds) => {
    const { token: tok, user: usr } = await apiLogin(creds);
    persistAuth(tok, usr);
    return usr;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('tg_token');
    localStorage.removeItem('tg_user');
  };

  // 4️⃣ Context value
  const value = {
    user,
    token,
    loading,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}

// 5️⃣ Custom hook for easy access
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
