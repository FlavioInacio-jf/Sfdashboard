import { createContext, ReactNode, useMemo } from 'react';
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

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
