import React, { ReactNode, ContextType, useState } from "react";

type SidebarContextType = {
  appState: string;
  setAppState: (state: string) => void;
};

type SidebarProviderType = {
  children: ReactNode;
};

export const SidebarContext = React.createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: SidebarProviderType) => {
  const [appState, setAppState] = useState("");

  const initialState: SidebarContextType = {
    appState,
    setAppState,
  };

  return (
    <SidebarContext.Provider value={initialState}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): ContextType<typeof SidebarContext> =>
  React.useContext(SidebarContext);
