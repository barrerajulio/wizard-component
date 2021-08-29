import React, { FC } from "react";

import { ReactChildrenWizardType } from "./types";
import { renderChildrenWithWizard } from "./utils";

interface IWizardContentProps {
  children: ReactChildrenWizardType;
}

const WizardContent: FC<IWizardContentProps> = ({ children }) => {
  return <React.Fragment>{renderChildrenWithWizard(children)}</React.Fragment>;
};

export default WizardContent;
