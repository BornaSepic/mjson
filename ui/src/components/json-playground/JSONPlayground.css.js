import styled from "styled-components";
import theme from "../../css/theme";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";


export const JSONPlaygroundWrapper = styled(Paper)`
  margin: ${theme.spacing(3)}px auto;
  max-width: 720px;
  border-radius: 10px;
`;

export const TabsWrapper = styled(Tabs)`
  [role="tablist"] {
    justify-content: center;
  }
`;

export const TabButton = styled(Tab)`
`;