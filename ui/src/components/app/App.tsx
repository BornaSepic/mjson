import React from 'react';
import Header from "../header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import JSONPlayground from "../json-playground/JSONPlayground";

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <JSONPlayground />
    </div>
  );
};

export default App;
