import React from "react";
import { render } from "@testing-library/react";

import { BasicTextField } from "./text-field.composition";

xit("should render with the correct text", () => {
  const { getByText } = render(<BasicTextField />);
  const rendered = getByText("hello from TextField");
  expect(rendered).toBeTruthy();
});
