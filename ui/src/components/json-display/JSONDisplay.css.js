import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import theme from "../../css/theme";

export const Textfield = styled(TextField)`
  padding: ${theme.spacing(1)}px;
  margin: ${theme.spacing(3)}px auto;
  max-width: 720px;
  width: 70%;
  display: flex;
  border: 1px solid ${theme.palette.secondary.dark};
  border-radius: 10px;
`;
