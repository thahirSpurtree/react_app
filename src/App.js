import React from 'react';
import './App.css';
import DashBoard from './pages/DashBoard';
import { GlobalStyle } from './utils/globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <DashBoard />
    </div>
  );
}

export default App;
