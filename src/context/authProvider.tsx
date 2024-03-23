import { ReactNode, createContext, useState } from 'react';
import { LS_KEYS, LocalStorageService } from '../services/localStorage';
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
  const userFromLocalStorage = LocalStorageService.get(LS_KEYS.USER);

  const [user, setUser] = useState<User | null>(userFromLocalStorage || null);

  const signin = (newUser: User | null, cb: () => void) => {
    setUser(newUser);
    LocalStorageService.set(LS_KEYS.USER, newUser);
    cb();
  };
  const signout = (cb: () => void) => {
    LocalStorageService.remove(LS_KEYS.USER);
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
