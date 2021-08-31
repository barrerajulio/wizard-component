import React from "react";

import Typography from "./typography";

export const BasicTypography = () => (
  <Typography
    variant="caption"
    color="error"
    mask="#### #### #### #### ####"
    decimalScale={2}
    prefix="$ "
    thousandSeparator
  >
    1234
  </Typography>
);
