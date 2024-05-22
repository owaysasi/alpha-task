import { useId } from "react";
import { TableCell, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 12,
    width: "20%",
  },
}));

export function AlphaTableCell({ children, ...restProps }) {
  const Id = useId();
  return (
    <StyledTableCell key={Id} {...restProps}>
      {children}
    </StyledTableCell>
  );
}
