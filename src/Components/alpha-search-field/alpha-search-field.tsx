import { Grid, TextField, Typography } from "@mui/material";
import _ from "lodash";

const DEBOUNCED_PERIOD = 500;

export function AlphaSearchField({ setSearchText }) {
  const onSearchChange = (event) => {
    onSearchDebounced(event.target.value);
  };

  const onSearchDebounced = _.debounce((text) => {
    console.log(text, "text");
    setSearchText(text);
  }, DEBOUNCED_PERIOD);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="left">
      <Grid item xs={3}>
        <Typography variant="p">Search by name:</Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField onChange={onSearchChange} size="small" fullWidth />
      </Grid>
    </Grid>
  );
}
