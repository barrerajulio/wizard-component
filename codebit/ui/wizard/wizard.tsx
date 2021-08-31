import React, { FC } from "react";
import { Box, BoxProps } from "@material-ui/core";

import WizardBody from "./wizard-body";
import WizardContent from "./wizard-content";
import WizardFooter from "./wizard-footer";
import WizardHeader from "./wizard-header";
import WizardProvider from "./wizard.context";

type IWizard<P> = FC<P> & {
  Body: typeof WizardBody;
  Content: typeof WizardContent;
  Footer: typeof WizardFooter;
  Header: typeof WizardHeader;
};

export interface WizardProps extends BoxProps {}

const Wizard: IWizard<WizardProps> = ({ children, ...validProps }) => {
  return (
    <WizardProvider>
      <Box {...validProps}>{children}</Box>
    </WizardProvider>
  );
};

Wizard.Body = WizardBody;
Wizard.Content = WizardContent;
Wizard.Footer = WizardFooter;
Wizard.Header = WizardHeader;

export default Wizard;
