//MUI
import { TableBody, tableBodyClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactNode } from "react";

const StyledAlphaTableBody = styled(TableBody)(() => ({
  [`&.${tableBodyClasses.root}`]: {
    height: "448px",
    position: "relative",
  },
}));

interface Props {
  children: ReactNode;
}

export function AlphaTableBody({ children, ...restProps }: Props) {
  return <StyledAlphaTableBody {...restProps}>{children}</StyledAlphaTableBody>;
}
