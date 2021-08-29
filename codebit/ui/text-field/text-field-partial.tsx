import React, {
  createRef,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
} from "react";
import { Box, makeStyles, TextFieldProps } from "@material-ui/core";

import TextFieldProvider from "./text-field.context";
import useTextField from "./use-text-field";
import { Key } from "./enum";

export type TextFieldPartialProps = Omit<TextFieldProps, "type"> & {
  type: "partial";
  length: number;
  value?: string;
};

interface IRenderPartialProps {
  index: number;
}

const useStyles = makeStyles((theme) => ({
  boxBase: {
    margin: theme.spacing(0.1),
    padding: theme.spacing(1),
    border: `${theme.spacing(0.1)}px solid ${theme.palette.grey[400]}`,
  },
  boxHighlight: {
    backgroundColor: theme.palette.augmentColor(theme.palette.grey).dark,
    color: theme.palette.getContrastText(
      theme.palette.augmentColor(theme.palette.grey).dark
    ),
  },
  hidden: {
    opacity: 0,
  },
}));

const RenderPartial: FC<IRenderPartialProps> = ({ index }) => {
  const { getValueByIndex, isActiveIndex, updateSelectedIndex, valueLength } =
    useTextField();
  const classes = useStyles();
  const handleOnClickBox = () => {
    return updateSelectedIndex(
      !getValueByIndex(index).length ? valueLength : index
    );
  };
  const boxClasses = [classes.boxBase];
  if (isActiveIndex(index)) {
    boxClasses.push(classes.boxHighlight);
  }

  return (
    <Box className={boxClasses.join(" ")} onClick={handleOnClickBox}>
      {getValueByIndex(index)}
    </Box>
  );
};

const RenderInput: FC<TextFieldPartialProps> = ({
  value: defaultValue,
  length,
}) => {
  const classes = useStyles();
  const {
    resetSelectedIndex,
    selectedIndex,
    setValue,
    value,
    updateSelectedIndex,
  } = useTextField();
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const onMouseUpEvent = useCallback((event: any) => {
    const newSelectedIndex = event.target.selectionStart;
    updateSelectedIndex(newSelectedIndex);
  }, []);
  useEffect(() => {
    inputRef.current.setSelectionRange(selectedIndex, selectedIndex + 1);
    inputRef.current.focus();
  }, [selectedIndex]);
  const onBlurEvent = useCallback(() => {
    resetSelectedIndex();
  }, []);
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.addEventListener("mouseup", onMouseUpEvent);
    inputRef.current.addEventListener("blur", onBlurEvent);
  }, [inputRef.current]);
  useEffect(() => {
    return () => {
      inputRef.current?.removeEventListener("mouseup", onMouseUpEvent);
      inputRef.current?.removeEventListener("blur", onBlurEvent);
    };
  }, []);
  const handleInputChange = (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & { target: HTMLInputElement }
  ) => {
    setValue(event.target.value);
    updateSelectedIndex(event.target.selectionStart);
  };
  const handleInputKeyPress = (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    const keyCode = event.key as string;
    const allowedKeys: string[] = [
      Key.ArrowLeft,
      Key.ArrowRight,
      Key.Backspace,
    ];
    const leftKeys: string[] = [Key.ArrowLeft, Key.Backspace];
    if (!allowedKeys.includes(keyCode)) {
      return;
    }
    const selectionStart = (event as any).target.selectionStart;
    updateSelectedIndex(
      leftKeys.includes(keyCode) ? selectionStart - 1 : selectionStart
    );
  };

  return (
    <input
      className={classes.hidden}
      ref={inputRef}
      type="text"
      value={value}
      onKeyUp={handleInputKeyPress}
      onChange={handleInputChange}
      maxLength={length}
    />
  );
};

interface IRenderContentProps {
  indexes: number[];
}

const RenderContent: FC<IRenderContentProps> = ({ indexes }) => (
  <Box display="flex" flexDirection="row">
    {indexes.map((index) =>
      React.createElement(RenderPartial, { index, key: index })
    )}
  </Box>
);

const TextFieldPartial: FC<TextFieldPartialProps> = ({
  length,
  value,
  ...validProps
}) => {
  return (
    <TextFieldProvider>
      <RenderContent
        indexes={Array.from({ length }).map((_, index) => index)}
      />
      <RenderInput value={value} length={length} {...validProps} />
    </TextFieldProvider>
  );
};

export default TextFieldPartial;
