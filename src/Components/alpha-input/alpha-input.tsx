//MUI
import { TextField } from "@mui/material";

//Form
import { useController } from "react-hook-form";

interface Props {
  children?: ReactNode;
  pattern?: string;
  required?: object;
  select?: boolean;
  type?: string;
  size?: string;
  label?: string;
  name: string;
  style?: object;
  control: object;
}

export function AlphaInput(props: Props) {
  const {
    control,
    name,
    type,
    size,
    required,
    pattern,
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
      required: required,
      pattern: pattern,
    },
  });

  return (
    <TextField
      required={required.value}
      error={Boolean(errors[name]?.type)}
      helperText={Boolean(errors[name]?.type) && errors[name]?.message}
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
