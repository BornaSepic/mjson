import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import theme from "../../css/theme";

export const Textfield = styled(TextField)`
  display: flex;
  border-radius: 10px;
  
  textarea {
    padding: ${theme.spacing(1)}px;
  }
`;
