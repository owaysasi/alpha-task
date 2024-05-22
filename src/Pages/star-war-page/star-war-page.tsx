import { Typography } from "@mui/material";
import { AlphaTable } from "../../Components/alpha-table/alpha-table";
import { AlphaSearchField } from "../../Components/alpha-search-field/alpha-search-field";
import { useState } from "react";

export function StarWarPage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div
      style={{ alignItems: "left", display: "flex", flexDirection: "column" }}
    >
      <Typography textAlign="left" variant="h4">
        Star War
      </Typography>
      <AlphaSearchField setSearchText={setSearchText} />
      <AlphaTable searchText={searchText} />
    </div>
  );
}
