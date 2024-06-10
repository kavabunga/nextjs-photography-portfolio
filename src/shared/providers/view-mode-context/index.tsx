'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
} from 'react';

interface IViewModeContext {
  pagesGridModes:
    | {
        [key: string]: boolean;
      }
    | undefined;
  setGrid: (page: string) => void;
  unsetGrid: (page: string) => void;
  toggleGrid: (page: string) => void;
}

const ViewModeContext = createContext<IViewModeContext | undefined>(undefined);

interface IViewModeContextProvider {
  children: ReactNode;
}

export function ViewModeContextProvider({
  children,
}: IViewModeContextProvider) {
  const [pagesGridModes, setPagesGridModes] = useState<
    IViewModeContext['pagesGridModes'] | undefined
  >(undefined);

  const setGrid = useCallback(
    (page: string) => setPagesGridModes((prev) => ({ ...prev, [page]: true })),
    []
  );
  const unsetGrid = useCallback(
    (page: string) => setPagesGridModes((prev) => ({ ...prev, [page]: false })),
    []
  );
  const toggleGrid = useCallback(
    (page: string) =>
      setPagesGridModes((prev) => ({
        ...prev,
        [page]: prev?.[page] ? !prev[page] : true,
      })),
    []
  );

  const value = useMemo(
    () => ({
      pagesGridModes,
      setGrid,
      unsetGrid,
      toggleGrid,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pagesGridModes]
  );

  useEffect(() => {
    if (!pagesGridModes) {
      return;
    }

    localStorage.setItem('pagesGridModes', JSON.stringify(pagesGridModes));
  }, [pagesGridModes]);

  useEffect(() => {
    const storedString = localStorage.getItem('pagesGridModes');
    if (!storedString || storedString === 'undefined') {
      return;
    }

    const initialValues: IViewModeContext['pagesGridModes'] =
      JSON.parse(storedString);

    setPagesGridModes(initialValues);
  }, []);

  return (
    <ViewModeContext.Provider {...{ value }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export const useViewMode = (): IViewModeContext => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useNavOverlay must be used within a NavOverlayProvider');
  }
  return context;
};
