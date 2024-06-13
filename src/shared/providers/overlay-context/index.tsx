'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

interface IOverlayContext {
  isOverlayOpen: { [key: string]: boolean };
  openOverlay: (id: string) => void;
  closeOverlay: (id: string) => void;
  closeAllOverlays: () => void;
  toggleOverlay: (id: string) => void;
}

const OverlayContext = createContext<IOverlayContext | undefined>(undefined);

interface IOverlayContextProvider {
  children: ReactNode;
}

export function OverlayContextProvider({ children }: IOverlayContextProvider) {
  const [isOverlayOpen, setIsOverlayOpen] = useState<{
    [key: string]: boolean;
  }>({});

  const openOverlay = useCallback(
    (id: string) => setIsOverlayOpen((prev) => ({ ...prev, [id]: true })),
    []
  );

  const closeOverlay = useCallback(
    (id: string) => setIsOverlayOpen((prev) => ({ ...prev, [id]: false })),
    []
  );

  const closeAllOverlays = useCallback(() => setIsOverlayOpen({}), []);

  const toggleOverlay = useCallback(
    (id: string) =>
      setIsOverlayOpen((prev) =>
        prev[id] !== undefined ? { ...prev, [id]: !prev[id] } : prev
      ),
    []
  );

  const value = useMemo(
    () => ({
      isOverlayOpen,
      openOverlay,
      closeOverlay,
      closeAllOverlays,
      toggleOverlay,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOverlayOpen]
  );

  return (
    <OverlayContext.Provider {...{ value }}>{children}</OverlayContext.Provider>
  );
}

export const useOverlay = (): IOverlayContext => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within a OverlayContextProvider');
  }
  return context;
};
