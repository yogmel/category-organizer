import React from "react";
import { Col, Container, Input, InputGroup, Row } from "reactstrap";

export default function CategoriesView() {
  return (
    <Container>
      <h1>Categories</h1>
      <Row>
        <Col>
          <h2>Add new category</h2>
          <InputGroup>
            <Input placeholder="New category" type="text" />
          </InputGroup>
        </Col>
        <Col>
          <h2>All categories</h2>
        </Col>
      </Row>
    </Container>
  );
}
