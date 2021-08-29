import React, { FC } from "react";
import {
  TextField as TextFieldMui,
  TextFieldProps as TextFieldPropsMui,
} from "@material-ui/core";

import TextFieldPartial, { TextFieldPartialProps } from "./text-field-partial";

export type TextFieldProps = TextFieldPartialProps | TextFieldPropsMui;

const TextField: FC<TextFieldProps> = ({ type, ...validProps }) => {
  if (type === "partial") {
    return <TextFieldPartial type={type} {...validProps} />;
  }
  return <TextFieldMui type={type} {...validProps} />;
};

export default TextField;
