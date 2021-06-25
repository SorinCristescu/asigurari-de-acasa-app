import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);

  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  };
  // Logout user
  const logout = async () => {
    const res = await fetch('/api/signout', {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    } else {
      setError(null);
    }
  };
  // Check if user is login
  const checkUserLoggedIn = async () => {
    const res = await fetch('/api/user');
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setError(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
