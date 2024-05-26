//React
import { useEffect, useState } from "react";

//Axios
import axios from "axios";

//MUI
import {
  Paper,
  Table,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
} from "@mui/material";

//Core components
import { AlphaTableCell } from "../alpha-table-cell/alpha-table-cell";
import { AlphaTableSkeleton } from "../alpha-table-skeleton/alpha-table-skeleton";
import { AlphaButton } from "../alpha-button/alpha-button";
import { AlphaTableBody } from "../alpha-table-body/alpha-table-body";
import { AlphaTableRow } from "../alpha-table-row/alpha-table-row";
import { AlphaNoData } from "../alpha-no-data/alpha-no-data";

//Routing
import { useNavigate } from "react-router-dom";

//ID generator
import { v4 as uuid } from "uuid";

//Const
import { ROWS_PER_PAGE } from "../../const/const";

interface Props {
  searchText?: string;
}

interface Data {
  count: number;
  next?: string;
  previous?: string;
  results: Array<RowData>;
}

interface RowData {
  birth_year: string;
  name: string;
  height: string;
  eye_color: string;
  gender?: string;
}

export function AlphaTable({ searchText }: Props) {
  const headers = ["Name", "Gender", "Height", "Eye color"];

  const [data, setData] = useState<Data | null>(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData(1, () => setPage(0));
  }, [searchText]);

  const getData = (pageNumber: number = 1, callBack: () => void) => {
    setIsLoading(true);
    callBack();
    axios
      .get(
        `https://swapi.dev/api/people/?page=${pageNumber}&search=${
          searchText ?? ""
        }`
      )
      .then((res) => {
        console.log(res.data, "data");
        setData(res.data);
        setIsLoading(false);
      });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    getData(newPage + 1, () => setPage(newPage));
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
            {data && data.results.length > 0 ? (
              data.results.map((row: RowData) => {
                const unique_id = uuid();
                return (
                  <AlphaTableRow key={unique_id}>
                    <AlphaTableCell>{row.name}</AlphaTableCell>
                    <AlphaTableCell>{row.gender}</AlphaTableCell>
                    <AlphaTableCell>{row.height}</AlphaTableCell>
                    <AlphaTableCell>{row["eye_color"]}</AlphaTableCell>
                    <AlphaTableCell>
                      <AlphaButton
                        size="small"
                        onClick={() => navigate("/alpha-task/add_patient")}
                      >
                        details
                      </AlphaButton>
                    </AlphaTableCell>
                  </AlphaTableRow>
                );
              })
            ) : data && data.results.length === 0 ? (
              <AlphaNoData>No Data To Show</AlphaNoData>
            ) : null}
          </AlphaTableBody>
        ) : (
          <AlphaTableSkeleton />
        )}
        <TableFooter>
          <AlphaTableRow>
            <TablePagination
              count={(data && data.count) ?? ROWS_PER_PAGE}
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
