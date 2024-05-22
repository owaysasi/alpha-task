import { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
} from "@mui/material";
import { AlphaTableCell } from "../alpha-table-cell/alpha-table-cell";
import { AlphaTableSkeleton } from "../alpha-table-skeleton/alpha-table-skeleton";
import { AlphaButton } from "../alpha-button/alpha-button";
import { AlphaTableBody } from "../alpha-table-body/alpha-table-body";
import { AlphaTableRow } from "../alpha-table-row/alpha-table-row";

const ROWS_PER_PAGE = 10;

export function AlphaTable() {
  const headers = ["Name", "Gender", "Height", "Eye color"];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
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
        setIsLoading(false);
      });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
    getData(newPage + 1);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <AlphaTableRow>
            {headers.map((item) => (
              <AlphaTableCell key={item} width={item === "Name" ? "30%" : ""}>
                {item}
              </AlphaTableCell>
            ))}
            <AlphaTableCell key="action"></AlphaTableCell>
          </AlphaTableRow>
        </TableHead>
        {!isLoading ? (
          <AlphaTableBody>
            {data.results &&
              data.results.map((row) => {
                return (
                  <AlphaTableRow>
                    <AlphaTableCell>{row.name}</AlphaTableCell>
                    <AlphaTableCell>{row.gender}</AlphaTableCell>
                    <AlphaTableCell>{row.height}</AlphaTableCell>
                    <AlphaTableCell>{row["eye_color"]}</AlphaTableCell>
                    <AlphaTableCell>
                      <AlphaButton size="small">details</AlphaButton>
                    </AlphaTableCell>
                  </AlphaTableRow>
                );
              })}
          </AlphaTableBody>
        ) : (
          <AlphaTableSkeleton />
        )}
        <TableFooter>
          <AlphaTableRow>
            <TablePagination
              count={data.count ?? ROWS_PER_PAGE}
              rowsPerPage={ROWS_PER_PAGE}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[10]}
            />
          </AlphaTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
