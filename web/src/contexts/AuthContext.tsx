import { createContext, ReactNode, useMemo } from 'react';
import { useQuery } from 'react-query';
import { queryKey } from '../constants/queryKeys';
import { userService } from '../services/userService';
import { UserType } from '../types/userType';

interface AuthContextType {
  isAuthenticated: boolean;
}
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user } = useQuery<UserType>(queryKey.session, userService.me);

  const isAuthenticated = useMemo(() => !!user, [user]);

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
