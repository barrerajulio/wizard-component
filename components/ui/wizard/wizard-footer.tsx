import React, { FC } from "react";

import { ReactChildrenWizardType } from "./types";
import { renderChildrenWithWizard } from "./utils";

interface IWizardFooterProps {
  children: ReactChildrenWizardType;
}

const WizardFooter: FC<IWizardFooterProps> = ({ children }) => {
  return <React.Fragment>{renderChildrenWithWizard(children)}</React.Fragment>;
};

export default WizardFooter;
