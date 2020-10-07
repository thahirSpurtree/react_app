import { Layout } from "antd";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { MenuList } from "../../utils";
import { history } from "../../utils/history";
import Navigation from "../../utils/Navigation";
import LandingPage from "../LandingPage";
import { navBar } from "./Navbar";
import atomicLogo  from '../../assets/logo.png';
const PrivateContainer = () => {
  return (
    <Router history={history}>
      <Layout>
        <Navigation logoAltText="Gale Logo" logoSrc={atomicLogo} logoSrcMobile={atomicLogo}>
          {navBar()}
        </Navigation>
        <Switch>
          {MenuList.map((menu, index) => {
            return (
              <Route key={index} path={menu.path} component={menu.component} />
            );
          })}
          <Route path="/" component={LandingPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default PrivateContainer;
