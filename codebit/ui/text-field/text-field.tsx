import React, { FC } from "react";
import {
  TextField as TextFieldMui,
  TextFieldProps as TextFieldPropsMui,
} from "@material-ui/core";

import TextFieldPartial, { TextFieldPartialProps } from "./text-field-partial";

interface TextFieldMuiProps extends Omit<TextFieldPropsMui, "type"> {
  type:
    | "color"
    | "date"
    | "datetime"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

export type TextFieldProps = TextFieldPartialProps | TextFieldMuiProps;

const TextField: FC<TextFieldProps> = ({ type, ...validProps }) => {
  if (type === "partial") {
    return (
      <TextFieldPartial
        type={type}
        {...(validProps as TextFieldPartialProps)}
      />
    );
  }
  return <TextFieldMui type={type} {...(validProps as TextFieldPropsMui)} />;
};

export default TextField;
