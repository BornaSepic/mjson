import React from "react";

import * as Styled from "./Header.css";

const Header: React.FC = () => {
  return (
    <Styled.HeaderBar position={"static"}>
      <Styled.HeaderTitle variant="h4">
        MJSON
      </Styled.HeaderTitle>
    </Styled.HeaderBar>
  );
};

export default Header;