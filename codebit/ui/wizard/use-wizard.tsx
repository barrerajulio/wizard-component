import { useCallback, useContext, useMemo } from "react";

import { WizardContext } from "./wizard.context";

export interface IUseWizard {
  isActive: (index: number) => boolean;
  shouldGoToNext: () => void;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (value: number) => void;
  onGoToNextPage: boolean;
  canGoToNext: boolean;
  enableGoToNextPage: () => void;
  disableGoToNextPage: () => void;
}

const useWizard = (): IUseWizard => {
  const context = useContext(WizardContext);

  if (context === undefined) {
    throw new Error("useWizard must be used within a WizardProvider");
  }

  const {
    activeIndex,
    canGoToNext,
    onGoToNextPage,
    setActiveIndex,
    setCanGoToNext,
    setGoToOnNextPage,
  } = context;
  const goToPage = useCallback(
    (value: number) => {
      setGoToOnNextPage(false);
      setCanGoToNext(false);
      setActiveIndex(value);
    },
    [setActiveIndex]
  );
  const shouldGoToNext = useCallback(() => {
    setGoToOnNextPage(true);
  }, [setGoToOnNextPage]);
  const nextPage = useCallback(() => {
    goToPage(activeIndex + 1);
  }, [activeIndex, goToPage]);
  const prevPage = useCallback(() => {
    goToPage(activeIndex < 1 ? 0 : activeIndex - 1);
  }, [activeIndex, goToPage]);
  const enableGoToNextPage = useCallback(() => {
    setCanGoToNext(true);
  }, [canGoToNext, setCanGoToNext]);
  const disableGoToNextPage = useCallback(() => {
    setCanGoToNext(false);
  }, [setCanGoToNext]);
  const isActive = useCallback(
    (index: number) => index === activeIndex,
    [activeIndex]
  );

  return useMemo(
    () => ({
      canGoToNext,
      disableGoToNextPage,
      enableGoToNextPage,
      goToPage,
      onGoToNextPage,
      isActive,
      nextPage,
      prevPage,
      shouldGoToNext,
    }),
    [
      canGoToNext,
      disableGoToNextPage,
      enableGoToNextPage,
      onGoToNextPage,
      goToPage,
      isActive,
      nextPage,
      prevPage,
      shouldGoToNext,
    ]
  );
};

export default useWizard;
