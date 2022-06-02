import Router from 'next/router';
import { createContext, ReactNode, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { queryKey } from '../constants/queryKeys';
import { userService } from '../services/userService';

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextType {
  isAuthenticated: boolean;
}
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data } = useQuery(queryKey.session, userService.me);
  const isAuthenticated = useMemo(() => !!data, [data]);

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
