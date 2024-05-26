//MUI
import { TextField } from "@mui/material";
import { ReactNode } from "react";

//Form
import { Control, useController } from "react-hook-form";
import { FormInput, Name, Size } from "../../types/types";

interface Props {
  children?: ReactNode;
  required?: boolean;
  select?: boolean;
  type?: string;
  errorMessage?: string;
  size?: Size;
  label?: string;
  name: Name;
  style?: object;
  control: Control<FormInput>;
  rules?: Rules;
}

interface Rules {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

export function AlphaInput(props: Props) {
  const {
    control,
    name,
    type,
    size,
    required,
    errorMessage,
    children,
    ...restProps
  } = props;
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    rules: {
      required,
    },
  });

  return (
    <TextField
      required={required}
      error={Boolean(errors[name as keyof FormInput]?.type)}
      helperText={
        Boolean(errors[name as keyof FormInput]?.type) && errorMessage
      }
      size={size}
      type={type}
      {...field}
      onChange={(e) => {
        field.onChange(e.target.value);
      }}
      {...restProps}
    >
      {children}
    </TextField>
  );
}
