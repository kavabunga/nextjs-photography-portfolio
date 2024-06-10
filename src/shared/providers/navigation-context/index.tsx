'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

interface INavigationContext {
  isNavigationOpen: boolean;
  openNavigation: () => void;
  closeNavigation: () => void;
  toggleNavigation: () => void;
}

const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
);

interface INavigationContextProvider {
  children: ReactNode;
}

export function NavigationContextProvider({
  children,
}: INavigationContextProvider) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const openNavigation = useCallback(() => setIsNavigationOpen(true), []);
  const closeNavigation = useCallback(() => setIsNavigationOpen(false), []);
  const toggleNavigation = useCallback(
    () => setIsNavigationOpen((prev) => !prev),
    []
  );

  const value = useMemo(
    () => ({
      isNavigationOpen,
      openNavigation,
      closeNavigation,
      toggleNavigation,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNavigationOpen]
  );

  return (
    <NavigationContext.Provider {...{ value }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = (): INavigationContext => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      'useNavigation must be used within a NavigationContextProvider'
    );
  }
  return context;
};
