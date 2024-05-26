//MUI
import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactNode } from "react";
import { Size } from "../../types/types";

interface Props {
  children: ReactNode;
  type?: string;
  size?: Size;
  variant?: string;
  disableRipple?: boolean;
  onClick?: () => void;
}

const StyledAlphaButton = styled(Button)(() => ({
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
