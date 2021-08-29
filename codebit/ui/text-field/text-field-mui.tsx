import React, { FC } from "react";
import { TextField as TextFieldMui, TextFieldProps } from "@material-ui/core";

const TextField: FC<TextFieldProps> = ({ ...validProps }) => {
  return <TextFieldMui {...validProps} />;
};

export default TextField;
