import useWizard from "./use-wizard";
import { ReactChildrenWizardType } from "./types";

const renderChildrenWithWizard = (children: ReactChildrenWizardType) => {
  let childrenRendered: React.ReactNode = children;
  if (children instanceof Function) {
    const wizard = useWizard();
    childrenRendered = children(wizard);
  }
  return childrenRendered;
};

export { renderChildrenWithWizard };
