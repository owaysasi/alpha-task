//MUI
import { Grid, TextField, Typography } from "@mui/material";

//Lodash
import _ from "lodash";

//Const
import { DEBOUNCED_PERIOD } from "../../const/const";

interface Props {
  setSearchText: () => void;
}

export function AlphaSearchField({ setSearchText }: Props) {
  const onSearchChange = (event) => {
    onSearchDebounced(event.target.value);
  };

  const onSearchDebounced = _.debounce((text) => {
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
