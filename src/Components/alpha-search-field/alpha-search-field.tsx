//MUI
import { Grid, TextField, Typography } from "@mui/material";

//Lodash
import _ from "lodash";

//Const
import { DEBOUNCED_PERIOD } from "../../const/const";

//Style
import "./alpha-search-field.css";

interface Props {
  setSearchText: (text: string) => void;
}

export function AlphaSearchField({ setSearchText }: Props) {
  const onSearchChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onSearchDebounced(event.target.value);
  };

  const onSearchDebounced = _.debounce((text: string) => {
    setSearchText(text);
  }, DEBOUNCED_PERIOD);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="left">
      <Grid item xs={3}>
        <Typography className="search-text">Search by name:</Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField onChange={(e) => onSearchChange(e)} size="small" fullWidth />
      </Grid>
    </Grid>
  );
}
