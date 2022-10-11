import { useContext } from 'react';
import { DashboardContext } from '../contexts';

export const useDashboard = () => {
  return useContext(DashboardContext);
};
