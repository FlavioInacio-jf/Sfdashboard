import { parseCookies } from 'nookies';
import { createContext, ReactNode, useMemo } from 'react';
import { useQuery } from 'react-query';
import { queryKey } from '../constants/queryKeys';
import { userService } from '../services/userService';
import { UserType } from '../types/userType';

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | undefined;
}
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const cookies = parseCookies();
  const { 'SFDashboard.auth.token': token } = cookies;
  const { data: user } = useQuery<UserType>(queryKey.session, userService.me, { enabled: !!token });

  const isAuthenticated = useMemo(() => !!user, [user]);

  const authProviderValues = useMemo(() => {
    return {
      isAuthenticated,
      user
    };
  }, [isAuthenticated, user]);
  return <AuthContext.Provider value={authProviderValues}>{children}</AuthContext.Provider>;
};
