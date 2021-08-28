import React from "react";
import { Button } from "@material-ui/core";

import {
  Wizard,
  WizardBody,
  WizardContent,
  WizardFooter,
  WizardHeader,
} from "./index";

export const BasicWizard = () => {
  return (
    <Wizard open>
      <React.Fragment>
        <WizardHeader>
          <h1>Header</h1>
        </WizardHeader>
        <WizardBody>
          <WizardContent>
            {(context) => (
              <Button onClick={() => context.enableGoToNextPage()}>
                Enable go to next
              </Button>
            )}
          </WizardContent>
          <WizardContent>Page 2</WizardContent>
        </WizardBody>
        <WizardFooter>
          {(context) => (
            <React.Fragment>
              <Button
                variant="contained"
                color="default"
                onClick={context.prevPage}
              >
                Previous
              </Button>
              <Button
                disabled={!context.canGoToNext}
                variant="contained"
                color="primary"
                onClick={context.nextPage}
              >
                Next
              </Button>
            </React.Fragment>
          )}
        </WizardFooter>
      </React.Fragment>
    </Wizard>
  );
};
