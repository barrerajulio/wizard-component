import { ReactChildrenWizardType } from "./types";
import { useWizard } from "./hooks";

const renderChildrenWithWizard = (children: ReactChildrenWizardType) => {
  let childrenRendered: React.ReactNode = children;
  if (children instanceof Function) {
    const wizard = useWizard();
    childrenRendered = children(wizard);
  }
  return childrenRendered;
};

export { renderChildrenWithWizard };
