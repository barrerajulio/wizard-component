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
    setTimeout(() => nextPage(), 2000);
  }, [onGoToNextPage]);

  return <Button onClick={enableGoToNextPage}>Enable go to next</Button>;
};

const DemoComponent2 = () => {
  const { enableGoToNextPage, nextPage, onGoToNextPage } = useWizard();
  useEffect(() => {
    onGoToNextPage === true && nextPage();
  }, [onGoToNextPage]);
  return (
    <React.Fragment>
      <h1>Paso 2</h1>
      <Button onClick={enableGoToNextPage}>Enable go to next</Button>
    </React.Fragment>
  );
};

export const BasicWizard = () => {
  return (
    <Wizard>
      <React.Fragment>
        <Wizard.Header>
          <h1>Header</h1>
        </Wizard.Header>
        <Wizard.Body>
          <Wizard.Content>
            <DemoComponent />
          </Wizard.Content>
          <Wizard.Content>
            <DemoComponent2 />
          </Wizard.Content>
          <Wizard.Content>
            <h1>Paso 3</h1>
          </Wizard.Content>
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
