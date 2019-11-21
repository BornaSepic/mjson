import React from 'react';
import Header from "../header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
    </div>
  );
};

export default App;
