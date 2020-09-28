import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "../../utils";

export const navBar = (showMenu) => {
  return MenuList.map((item, index) => {
    return (
      <NavLink
        to={item.path}
        key={index}
        activeClassName="active"
        onClick={showMenu}
      >
        {item.text}
      </NavLink>
    );
  });
};

