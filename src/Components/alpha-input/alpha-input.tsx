import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

export function AlphaInput(props) {
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

AlphaInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  required: PropTypes.object,
  style: PropTypes.object,
  pattern: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  select: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node,
};
