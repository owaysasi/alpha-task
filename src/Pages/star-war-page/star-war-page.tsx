//MUI
import { Stack, Typography } from "@mui/material";

//Core components
import { AlphaTable } from "../../Components/alpha-table/alpha-table";
import { AlphaSearchField } from "../../Components/alpha-search-field/alpha-search-field";

//Style
import "./star-war-page.css";

//Hooks
import { useState } from "react";

export function StarWarPage() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="star-war-page-container">
      <Stack marginBottom={1}>
        <Typography textAlign="left" variant="h4">
          Star War
        </Typography>
        <AlphaSearchField setSearchText={setSearchText} />
      </Stack>
      <AlphaTable searchText={searchText} />
    </div>
  );
}
