import React, { useState } from "react";

import TextField from "./text-field";

export const PartialTextField = () => {
  const handleOnChange = (event) => {
    console.log(event);
  };
  return (
    <TextField
      onChange={handleOnChange}
      value="Hello"
      type="partial"
      length={5}
    />
  );
};

export const MaskTextField = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      type="text"
      mask="#### #### #### ##### ####"
    />
  );
};
