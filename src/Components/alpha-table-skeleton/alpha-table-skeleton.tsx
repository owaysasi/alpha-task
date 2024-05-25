//MUI
import { Skeleton, TableBody, TableRow } from "@mui/material";

//Core components
import { AlphaTableCell } from "../alpha-table-cell/alpha-table-cell";

//ID Generator
import { v4 as uuid } from "uuid";

//Style
import "./alpha-table-skeleton.css";

//Const
import { ROWS_PER_PAGE } from "../../const/const";

export function AlphaTableSkeleton() {
  return (
    <TableBody className="skeleton-container">
      {[...Array(ROWS_PER_PAGE)].map(() => {
        const unique_id = uuid();
        return (
          <TableRow key={unique_id}>
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
        );
      })}
    </TableBody>
  );
}
