import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import theme from "../../css/theme";

import circuitBoard from "../../static/circuit-board.svg"

export const HeaderBar = styled(AppBar)`
  padding: ${theme.spacing(1)}px;
  background-color: ${theme.palette.secondary.dark};
  background-image: url(${circuitBoard});
`;

export const HeaderTitle = styled(Typography)`
  font-weight: bold;
  
  &::first-letter {
    color: ${theme.palette.secondary.main};
  } 
`;