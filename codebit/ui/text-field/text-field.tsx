import NumberFormat from "react-number-format";
import React, { FC } from "react";
import {
  TextField as TextFieldMui,
  TextFieldProps as TextFieldPropsMui,
} from "@material-ui/core";

import TextFieldPartial, { TextFieldPartialProps } from "./text-field-partial";
import { BaseTextFieldProps } from "./types";

interface TextFieldMuiProps
  extends Omit<TextFieldPropsMui, "type">,
    BaseTextFieldProps {
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

const NumberFormatCustom = ({ format, ...validProps }: { format: string }) => {
  return <NumberFormat format={format} {...validProps} />;
};

const DefaultTextField: FC<TextFieldProps> = ({
  mask: format,
  ...validProps
}) => {
  if (format) {
    return (
      <TextFieldMui
        InputProps={{
          inputComponent: NumberFormatCustom as any,
          inputProps: { format },
          ...(validProps as any),
        }}
        {...(validProps as TextFieldPropsMui)}
      />
    );
  }
  return <TextFieldMui {...(validProps as TextFieldPropsMui)} />;
};

const TextField: FC<TextFieldProps> = ({ type, ...validProps }) => {
  if (type === "partial") {
    return (
      <TextFieldPartial
        type={type}
        {...(validProps as TextFieldPartialProps)}
      />
    );
  }
  return <DefaultTextField type={type} {...validProps} />;
};

export default TextField;
