import { IUseWizard } from "../hooks";

type ReactChildrenWizardType =
  | React.ReactNode
  | string
  | ((context: IUseWizard) => React.ReactNode);

export { ReactChildrenWizardType };
