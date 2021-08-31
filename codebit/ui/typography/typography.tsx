import NumberFormat from "react-number-format";
import React, { FC } from "react";
import {
  Typography as TypographyMui,
  TypographyProps as TypographyPropsMui,
} from "@material-ui/core";

import { IMaskableProps } from "./interfaces";

export type TypographyProps = TypographyPropsMui &
  IMaskableProps & {
    component?: React.ElementType;
  };

const Typography: FC<TypographyProps> = ({
  decimalScale,
  children,
  component = "span",
  mask,
  prefix,
  thousandSeparator,
  ...validProps
}) => {
  if (mask && typeof children === "string") {
    children = (
      <NumberFormat
        value={children}
        mask={mask}
        isNumericString
        decimalScale={decimalScale}
        displayType="text"
        prefix={prefix}
        thousandSeparator={thousandSeparator}
      />
    );
  }
  return (
    <TypographyMui component={component} {...validProps}>
      {children}
    </TypographyMui>
  );
};

export default Typography;
