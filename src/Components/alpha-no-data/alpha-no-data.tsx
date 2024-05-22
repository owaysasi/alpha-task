import { Typography } from "@mui/material";
import "./alpha-no-data.css";

export function AlphaNoData({ message }) {
  return (
    <div className="no-data">
      <Typography variant="h3">{message}</Typography>
    </div>
  );
}
