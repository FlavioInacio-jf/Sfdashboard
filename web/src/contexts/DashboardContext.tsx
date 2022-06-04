import { ChangeEvent, createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface DashboardContextType {
  isNewProductModalOpen: boolean;
  handleOpenNewProductModal: () => void;
  handleCloseNewProductModal: () => void;
  handleSearchDashboard: (event: ChangeEvent<HTMLInputElement>) => void;
  searchDashboard: string;
}
interface DashboardProviderProps {
  children: ReactNode;
}
export const DashboardContext = createContext({} as DashboardContextType);
export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [searchDashboard, setSearchDashboard] = useState('');

  const handleSearchDashboard = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchDashboard(event.target.value);
  }, []);
  const handleOpenNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(true);
  }, []);
  const handleCloseNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(false);
  }, []);

  const dashboardProviderValue = useMemo(() => {
    return {
      isNewProductModalOpen,
      handleOpenNewProductModal,
      handleCloseNewProductModal,
      handleSearchDashboard,
      searchDashboard
    };
  }, [
    handleCloseNewProductModal,
    handleOpenNewProductModal,
    handleSearchDashboard,
    isNewProductModalOpen,
    searchDashboard
  ]);
  return (
    <DashboardContext.Provider value={dashboardProviderValue}>{children}</DashboardContext.Provider>
  );
};
