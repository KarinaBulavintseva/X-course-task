import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/sign-in' state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
