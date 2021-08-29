import React, { FC, useEffect } from "react";
import { Button } from "@material-ui/core";

import { useWizard } from "./hooks";
import {
  Wizard,
  WizardBody,
  WizardContent,
  WizardFooter,
  WizardHeader,
} from "./index";

const DemoComponent: FC = () => {
  const { enableGoToNextPage, nextPage, onGoToNextPage } = useWizard();
  useEffect(() => {
    if (onGoToNextPage !== true) {
      return;
    }
    console.log("should GoTo next page");
    setTimeout(() => nextPage(), 4000);
  }, [onGoToNextPage]);

  return <Button onClick={enableGoToNextPage}>Enable go to next</Button>;
};

export const BasicWizard = () => {
  return (
    <Wizard open>
      <React.Fragment>
        <WizardHeader>
          <h1>Header</h1>
        </WizardHeader>
        <WizardBody>
          <WizardContent>
            <DemoComponent />
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
                onClick={context.shouldGoToNext}
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
