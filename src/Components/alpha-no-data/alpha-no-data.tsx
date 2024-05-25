//MUI
import { Typography } from "@mui/material";

//Style
import "./alpha-no-data.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function AlphaNoData({ children }: Props) {
  return (
    <div className="no-data">
      <Typography variant="h3">{children}</Typography>
    </div>
  );
}
