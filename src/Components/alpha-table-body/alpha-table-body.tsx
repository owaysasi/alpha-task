import { TableBody, tableBodyClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlphaTableBody = styled(TableBody)(() => ({
  [`&.${tableBodyClasses.root}`]: {
    height: "448px",
  },
}));

export function AlphaTableBody({ children, ...restProps }) {
  return <StyledAlphaTableBody {...restProps}>{children}</StyledAlphaTableBody>;
}
