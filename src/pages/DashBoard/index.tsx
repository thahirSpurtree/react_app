import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { Cards } from "../../ds";

const StyledRow = styled(Row)`
    height: 100vh;
`;
const DashBoard = () => {
  return (
    <StyledRow type="flex" justify="center" align="middle">
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <Cards />
      </Col>
    </StyledRow>
  );
};
export default DashBoard;
