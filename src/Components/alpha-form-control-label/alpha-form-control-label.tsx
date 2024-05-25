//MUI
import { FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledAlphaFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`, // Border color from theme
  borderRadius: theme.shape.borderRadius, // Border radius from theme
  paddingRight: 4,
}));

export function AlphaFormControlLabel(props: object) {
  return <StyledAlphaFormControlLabel {...props} />;
}

AlphaFormControlLabel.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  control: PropTypes.node,
};
