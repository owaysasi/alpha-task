import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { AlphaTableCell } from "../alpha-table-cell/alpha-table-cell";
import axios from "axios";
import { useEffect, useState } from "react";
import { AlphaTableSkeleton } from "../alpha-table-skeleton/alpha-table-skeleton";

export function AlphaTable() {
  const headers = ["Name", "Gender", "Height", "Eye color"];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = (pageNumber: number = 1) => {
    setIsLoading(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((res) => {
        setData(res.data);
        setRowsPerPage(res.data?.results.length);
        setIsLoading(false);
      });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
    getData(newPage + 1);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <AlphaTableCell key={item}>{item}</AlphaTableCell>
            ))}
          </TableRow>
        </TableHead>
        {!isLoading ? (
          <TableBody>
            {data.results &&
              data.results.map((row) => {
                // const Id = useId();
                return (
                  <TableRow>
                    <AlphaTableCell>{row.name}</AlphaTableCell>
                    <AlphaTableCell>{row.gender}</AlphaTableCell>
                    <AlphaTableCell>{row.height}</AlphaTableCell>
                    <AlphaTableCell>{row["eye_color"]}</AlphaTableCell>
                    {/* <StyledTableCell component="th" scope="row">
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        ) : (
          <AlphaTableSkeleton />
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={data.count}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
