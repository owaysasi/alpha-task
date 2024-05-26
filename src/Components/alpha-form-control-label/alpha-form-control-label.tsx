//MUI
import { FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAlphaFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`, // Border color from theme
  borderRadius: theme.shape.borderRadius, // Border radius from theme
  paddingRight: 4,
}));

interface Props {
  value?: string;
  label: string;
  control: JSX.Element;
}

export function AlphaFormControlLabel(props: Props) {
  return <StyledAlphaFormControlLabel {...props} />;
}
