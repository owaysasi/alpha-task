import { TableRow, tableRowClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlphaTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    maxHeight: "44px",
  },
}));

export function AlphaTableRow({ children, ...restProps }) {
  return <StyledAlphaTableRow {...restProps}>{children}</StyledAlphaTableRow>;
}
