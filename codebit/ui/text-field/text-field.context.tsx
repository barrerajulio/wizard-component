import React, { FC, createContext, useMemo, useState } from "react";

interface ITextFieldContext {
  value: string[];
  setValue: (value: string[]) => void;
  position?: number;
  setPosition: (value?: number) => void;
}

const TextFieldContext = createContext<ITextFieldContext>({} as any);

const TextFieldProvider: FC = ({ children }) => {
  const [value, setValue] = useState<string[]>([]);
  const [position, setPosition] = useState<undefined | number>();
  const providerValue = useMemo<ITextFieldContext>(
    () => ({
      value,
      setValue,
      position,
      setPosition,
    }),
    [value, setValue, position, setPosition]
  );
  return (
    <TextFieldContext.Provider value={providerValue}>
      {children}
    </TextFieldContext.Provider>
  );
};

export default TextFieldProvider;

export { TextFieldContext };
