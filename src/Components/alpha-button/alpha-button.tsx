//MUI
import {
  Button,
  buttonClasses,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlphaButton = styled(Button)<MuiButtonProps>(() => ({
  [`&.${buttonClasses.sizeSmall}`]: {
    padding: 0,
    lineHeight: 0,
    minWidth: "auto",
  },
  textTransform: "capitalize",
  "&:focus": {
    outline: "none",
  },
}));

export function AlphaButton({ children, ...restProps }: MuiButtonProps) {
  return <StyledAlphaButton {...restProps}>{children}</StyledAlphaButton>;
}
