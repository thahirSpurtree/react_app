import React, { useState } from "react";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import { Menu } from "antd";
import { GlobalStyle } from "./utils/globalStyle";
const { SubMenu } = Menu;
function App() {
  const [current, setCurrent] = useState("");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">DashBoard</Menu.Item>
        <Menu.Item key="app">
          About
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          title="Contact"
        >
          <Menu.ItemGroup title="About Us">
            <Menu.Item key="setting:1">services</Menu.Item>
            <Menu.Item key="setting:2">Management</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <DashBoard />
    </div>
  );
}

export default App;
