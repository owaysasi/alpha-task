//MUI
import { TableRow, tableRowClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactNode } from "react";

const StyledAlphaTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    maxHeight: "44px",
  },
}));

interface Props {
  children: ReactNode;
}

export function AlphaTableRow({ children, ...restProps }: Props) {
  return <StyledAlphaTableRow {...restProps}>{children}</StyledAlphaTableRow>;
}
