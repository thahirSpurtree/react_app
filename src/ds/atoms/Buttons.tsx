import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  color: ${props => props.color} !important;
`;
export const Buttons = (props: any) => {
  return (
    <AntButton {...props} type={props.type}>
      {props.children}
    </AntButton>
  );
};

export const StyledDynamicButton = (props: any) => {
  return props.rounded ? <StyledButton {...props} shape="round">{props.children}</StyledButton> : <StyledButton {...props} >{props.children}</StyledButton>;
};

AntButton.defaultProps = {
  onClick: () => alert("Button Clicked"),
  type: "primary",
  shape: "round",
};

StyledDynamicButton.defaultProps = {
  onClick: () => alert("Download Button Clicked"),
  type: "primary",
  shape: "square",
};
