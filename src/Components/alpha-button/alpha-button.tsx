import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlphaButton = styled(Button)(() => ({
  [`&.${buttonClasses.sizeSmall}`]: {
    padding: 0,
    fontSize: 12,
    textTransform: "capitalize",
    minWidth: "0",
    lineHeight: "normal",
  },
}));

export function AlphaButton({ children, ...restProps }) {
  return <StyledAlphaButton {...restProps}>{children}</StyledAlphaButton>;
}
