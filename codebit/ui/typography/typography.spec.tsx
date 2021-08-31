import React from "react";
import { render } from "@testing-library/react";

import { BasicTypography } from "./typography.composition";

xit("should render with the correct text", () => {
  const { getByText } = render(<BasicTypography />);
  const rendered = getByText("hello from Typography");
  expect(rendered).toBeTruthy();
});
