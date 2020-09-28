import { Layout } from "antd";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { MenuList } from "../../utils";
import { history } from "../../utils/history";
import Navigation from "../../utils/Navigation";
import DashBoard from "../DashBoard";
import { navBar } from "./Navbar";

const PrivateContainer = (isOpen, showMenu) => {
  return (
    <Router history={history}>
      <Layout>
        <Navigation logoAltText="Gale Logo" isOpen={isOpen} menuOpen={showMenu}>
          {navBar(showMenu)}
        </Navigation>
        <Switch>
          {MenuList.map((menu, index) => {
            return (
              <Route key={index} path={menu.path} component={menu.component} />
            );
          })}
          <Route path="/" component={DashBoard} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default PrivateContainer;
