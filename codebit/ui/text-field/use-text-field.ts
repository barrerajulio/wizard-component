import { useContext } from "react";

import { TextFieldContext } from "./text-field.context";

export interface IUseTextField {
  getValueByIndex: (index: number) => string;
  isActiveIndex: (index: number) => boolean;
  setValue: (value: string | string[]) => void;
  value: string;
  updateSelectedIndex: (value: number) => void;
  resetSelectedIndex: () => void;
  selectedIndex?: number;
}

const useTextField = (): IUseTextField => {
  const context = useContext(TextFieldContext);
  if (context === undefined) {
    throw new Error("useTextField must be used within a TextFieldProvider");
  }
  const {
    setValue: setValueAsArray,
    setPosition,
    position: selectedIndex,
    value,
  } = context;
  const setValue = (newValue: string | string[]) => {
    const valueAdded =
      typeof newValue === "string" ? newValue.split("") : newValue;
    setValueAsArray(valueAdded);
  };
  const getValueByIndex = (index: number) => {
    return value[index] || "";
  };
  const updateSelectedIndex = (index: number) => {
    setPosition(index);
  };
  const resetSelectedIndex = () => {
    setPosition();
  };
  const isActiveIndex = (index: number) => {
    return selectedIndex === index;
  };

  return {
    getValueByIndex,
    isActiveIndex,
    setValue,
    value: value.join(""),
    resetSelectedIndex,
    selectedIndex,
    updateSelectedIndex,
  };
};

export default useTextField;
