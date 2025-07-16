import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', user);   // ✅ Save username
    setIsLoggedIn(true);
    setUsername(user);                         // ✅ Update state
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');       // ✅ Clear username
    setIsLoggedIn(false);
    setUsername('');
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
    setUsername(localStorage.getItem('username') || '');
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
