import { ReactNode, createContext, useState } from 'react';
import { User } from '../types';

type AuthContextType = {
  user: User | null;
  signin: (newUser: User | null, cb: () => void) => void;
  signout: (cb: () => void) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (newUser: User | null, cb: () => void) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
