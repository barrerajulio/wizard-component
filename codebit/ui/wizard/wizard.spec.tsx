import React from "react";
import { render } from "@testing-library/react";

import { BasicWizard } from "./wizard.composition";

xit("should render with the correct text", () => {
  const { getByText } = render(<BasicWizard />);
  const rendered = getByText("hello from Wizard");
  expect(rendered).toBeTruthy();
});
