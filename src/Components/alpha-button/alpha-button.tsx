//MUI
import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledAlphaButton = styled(Button)(() => ({
  [`&.${buttonClasses.sizeSmall}`]: {
    // textTransform: "capitalize",
    padding: 0,
    lineHeight: 0,
    minWidth: "auto",
  },
  textTransform: "capitalize",
  "&:focus": {
    outline: "none",
  },
}));

export function AlphaButton({ children, ...restProps }) {
  return <StyledAlphaButton {...restProps}>{children}</StyledAlphaButton>;
}

AlphaButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined"]),
  children: PropTypes.node,
  disableRipple: PropTypes.bool,
  onClick: PropTypes.func,
};
