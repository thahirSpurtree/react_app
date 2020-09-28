import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { Responsive } from "./Responsive";
import Icon from "@ant-design/icons/lib/components/Icon";
interface MenuProps {
  isOpen?: boolean;
  logoSrc?: string;
  logoAltText?: string;
  logoSrcMobile?: string;
  children?: object | undefined;
  menuOpen?: () => void;
  showMenuIcon?: boolean;
}
const StyledLayoutHeader = styled(Layout.Header)`
  background: #282829;
  height: 62px;
  padding: 0;
  @media (max-width: ${Responsive.desktop}}) {
    height: auto;
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  padding: 5px 0px 0px 0px;
  z-index: 100;
  @media (max-width: ${Responsive.desktop}) {
    flex-direction: ${(props: MenuProps) => (props.isOpen ? `column` : `row`)};
    align-items: flex-start;
    position: ${(props: MenuProps) => (props.isOpen ? `fixed` : `relative`)}
    height: ${(props: MenuProps) => (props.isOpen ? `100vh` : `auto`)};
    width: 100%;
    left: 0px;
    .menu-items {
      flex-direction: column;
      align-self: stretch;
      display: ${(props: MenuProps) => (props.isOpen ? `flex` : `none`)};
    }
    .logo-Mobile {
      display: ${(props: MenuProps) => (props.isOpen ? `none` : `block`)};
    }
    .anticon-menu {
    display: ${(props: MenuProps) => (props.showMenuIcon ? "block" : "none")};
  }
  }
`;

const StyledLogo = styled.img`
  height: 40px;
  align-self: center;
  display: block;
  margin: 0 0 0 70px;
  @media (max-width: ${Responsive.desktop}) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${(props: MenuProps) => (props.isOpen ? "transparent" : `#fff`)};
  font-size: 20px;
  line-height: 20px;
  margin: 20px 10px;
  cursor: pointer;

  @media (min-width: ${Responsive.desktop}) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  width: 140px;
  height: auto;
  margin: 10px auto;
  @media (min-width: ${Responsive.desktop}) {
    display: none;
  }
`;

const MenuList = styled.div`
  margin: 0;
  padding: 5px 0;
  transition: all 0.5s;
  a {
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    line-height: 40px;
    &:hover {
      color: #ffff;
    }
  }
  .active {
    color: #ffffff !important;
  }

  @media (min-width: ${Responsive.desktop}) {
    margin: 0 70px;
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    .logoutButton {
      margin-left: auto;
    }
    a {
      margin: 0 70px 0 0;
    }
  }
`;
const Navigation = (props: MenuProps) => {
  return (
    <StyledLayoutHeader>
      <StyledNavBar {...props}>
        <StyledLogo src={props.logoSrc} alt={props.logoAltText} />
        <StyledIcon
          type={props.isOpen ? "close" : "menu"}
          onClick={props.menuOpen}
        />
        <LogoMobile
          src={props.logoSrcMobile}
          alt={props.logoAltText}
          className="logo-Mobile"
        />
        <MenuList className="menu-items">{props.children}</MenuList>
      </StyledNavBar>
    </StyledLayoutHeader>
  );
};

Navigation.defaultProps = {
    menuList: [
      {
        path: '/Landingpage',
        text: 'Landing Page'
      },
      {
        path: '/Dashboard',
        text: 'Dash Board'
      }
    ],
    isOpen: false,
    showMenuIcon: true
  };

export default Navigation;
