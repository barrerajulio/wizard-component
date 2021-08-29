import { IUseWizard } from "./use-wizard";

type ReactChildrenWizardType =
  | React.ReactNode
  | string
  | ((context: IUseWizard) => React.ReactNode);

export { ReactChildrenWizardType };
