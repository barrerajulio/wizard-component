import React, { FC } from "react";
import { Modal, ModalProps, Paper } from "@material-ui/core";

import WizardProvider from "../../context/wizard.context";

export interface WizardProps extends ModalProps {}

const Wizard: FC<WizardProps> = ({ children, ...validProps }) => {
  return (
    <WizardProvider>
      <Modal {...validProps}>
        <Paper>{children}</Paper>
      </Modal>
    </WizardProvider>
  );
};

export { Wizard };
