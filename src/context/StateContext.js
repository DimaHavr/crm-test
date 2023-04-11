import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showMobileSideMenu, setMobileShowSideMenu] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const handleCustomersClick = () => {
    setShowCustomers(true);
    setMobileShowSideMenu(false);
  };
  const handleShowMenuClick = () => {
    setMobileShowSideMenu(!showMobileSideMenu);
  };

  return (
    <Context.Provider
      value={{
        handleCustomersClick,
        handleShowMenuClick,
        showMobileSideMenu,
        showCustomers,
        setMobileShowSideMenu,
        setShowCustomers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
