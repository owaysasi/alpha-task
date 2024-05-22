import { Skeleton, TableBody, TableRow } from "@mui/material";
import { AlphaTableCell } from "../alpha-table-cell/alpha-table-cell";
import "./alpha-table-skeleton.css";

export function AlphaTableSkeleton() {
  return (
    <TableBody className="skeleton-container">
      {[...Array(10)].map(() => (
        <TableRow>
          <AlphaTableCell className="table-cell" width="30%">
            <Skeleton variant="rectangular" height={20} />
          </AlphaTableCell>
          <AlphaTableCell className="table-cell">
            <Skeleton variant="rectangular" height={20} />
          </AlphaTableCell>
          <AlphaTableCell className="table-cell">
            <Skeleton variant="rectangular" height={20} />
          </AlphaTableCell>
          <AlphaTableCell className="table-cell">
            <Skeleton variant="rectangular" height={20} />
          </AlphaTableCell>
          <AlphaTableCell className="table-cell">
            <Skeleton variant="rectangular" height={20} />
          </AlphaTableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
