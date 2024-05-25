//MUI
import { TableCell, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactNode } from "react";

//ID Generator
import { v4 as uuid } from "uuid";

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

interface Props {
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export function AlphaTableCell({ children, ...restProps }: Props) {
  const unique_id = uuid();
  return (
    <StyledTableCell key={unique_id} {...restProps}>
      {children}
    </StyledTableCell>
  );
}
