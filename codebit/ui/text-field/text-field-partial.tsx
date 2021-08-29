import React, { FC } from "react";

export type TextFieldPartialProps = {
  type: "partial";
};

const TextFieldPartial: FC<TextFieldPartialProps> = () => {
  return <h1>Partial</h1>;
};

export default TextFieldPartial;
