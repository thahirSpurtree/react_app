import React from "react";
import { Card, Col, Row } from "antd";
import { Buttons, StyledDynamicButton } from "../atoms";

export const Cards = () => {
  return (
    <Card>
      <Row type={'flex'} justify="space-between">
        <Col>
          <Buttons>Atomic button</Buttons>
        </Col>
        <Col>
          <StyledDynamicButton color="Pink" rounded>
             Dynamic Button
          </StyledDynamicButton>
        </Col>
      </Row>
    </Card>
  );
};

export default Cards;
