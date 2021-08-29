import React, { FC, useEffect } from "react";
import { Button } from "@material-ui/core";

import { useWizard, Wizard } from "./index";

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
        <Wizard.Header>
          <h1>Header</h1>
        </Wizard.Header>
        <Wizard.Body>
          <Wizard.Content>
            <DemoComponent />
          </Wizard.Content>
          <Wizard.Content>Page 2</Wizard.Content>
        </Wizard.Body>
        <Wizard.Footer>
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
        </Wizard.Footer>
      </React.Fragment>
    </Wizard>
  );
};
