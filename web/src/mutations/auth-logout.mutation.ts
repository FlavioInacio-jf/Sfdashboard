import { parseCookies } from 'nookies';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { signOut } from '../components/Layouts/LayoutDashboard/Sidebar';
import { api } from '../services';

export const LogoutMutation = () => {
  const { 'SFDashboard.auth.refreshToken': refreshToken } = parseCookies();

  const config = {
    headers: { Authorization: `Bearer ${refreshToken}` }
  };
  return useMutation(() => api.post('auth/logout', {}, config), {
    onError: () => {
      signOut();
    },
    onSuccess: () => {
      signOut();
      toast.error('Hello, your place has been successfully fulfilled!');
    }
  });
};
