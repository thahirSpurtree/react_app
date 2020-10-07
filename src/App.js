import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./utils/globalStyle";
import PrivateContainer from "./pages/PrivateContainer";

function App() {
  return (
    <div className="App" data-testid="app">
      <GlobalStyle />
      <PrivateContainer />
    </div>
  );
}

export default App;
