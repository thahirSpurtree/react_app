import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./utils/globalStyle";
import LandingPage from "./pages/PrivateContainer";
import PrivateContainer from "./pages/PrivateContainer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PrivateContainer />
    </div>
  );
}

export default App;
