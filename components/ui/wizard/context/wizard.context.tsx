import React, { createContext, FC, useMemo, useState } from "react";

export interface IWizardContext {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
  setCanGoToNext: (value: boolean) => void;
  // TODO reset on each page
  goToOnNextPage: boolean;
  setGoToOnNextPage: (value: boolean) => void;
  // TODO reset on each page change
  canGoToNext: boolean;
}

const WizardContext = createContext<IWizardContext>({} as any);

const WizardProvider: FC = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [goToOnNextPage, setGoToOnNextPage] = useState(false);
  const [canGoToNext, setCanGoToNext] = useState(false);
  const value = useMemo(
    () => ({
      activeIndex,
      canGoToNext,
      goToOnNextPage,
      setActiveIndex,
      setCanGoToNext,
      setGoToOnNextPage,
    }),
    [
      activeIndex,
      canGoToNext,
      goToOnNextPage,
      setActiveIndex,
      setCanGoToNext,
      setGoToOnNextPage,
    ]
  );

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export default WizardProvider;

export { WizardContext };
