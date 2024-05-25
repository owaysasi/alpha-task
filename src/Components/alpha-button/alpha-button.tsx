//MUI
import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactNode } from "react";

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

interface Props {
  children: ReactNode;
  type?: string;
  size?: string;
  variant?: string;
  disableRipple?: boolean;
  onClick?: () => void;
}

export function AlphaButton({ children, ...restProps }: Props) {
  return <StyledAlphaButton {...restProps}>{children}</StyledAlphaButton>;
}
