//MUI
import { TextField } from "@mui/material";
import { ReactNode } from "react";

//Form
import { Control, UseControllerProps, useController } from "react-hook-form";
import { FormInput, Message, Name, Size } from "../../types/types";

interface Props {
  children?: ReactNode;
  required?: Required;
  select?: boolean;
  type?: string;
  size?: Size;
  label?: string;
  name: Name;
  style?: object;
  control: Control<FormInput>;
}

interface Required {
  value: boolean;
  message?: Message;
}

export function AlphaInput(props: Props & UseControllerProps<FormInput>) {
  const { control, name, type, size, required, children, ...restProps } = props;
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
      required={required?.value}
      error={Boolean(errors[name as keyof FormInput]?.type)}
      helperText={
        Boolean(errors[name as keyof FormInput]?.type) &&
        errors[name as keyof FormInput]?.message
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
