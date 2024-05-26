//MUI
import { Button, buttonClasses } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
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

export function AlphaButton({ children, ...restProps }: Props) {
  return <StyledAlphaButton {...restProps}>{children}</StyledAlphaButton>;
}
