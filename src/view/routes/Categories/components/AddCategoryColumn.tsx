import React, { ChangeEvent } from "react";
import { Button, Col, Input, InputGroup } from "reactstrap";
import { LeftSubTitle } from "../../../styled";

interface AddCategoryColumnProps {
  category: string;
  handleCategoryInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addCategory: () => void;
}

export default function AddCategoryTodoColumn(props: AddCategoryColumnProps) {
  const { category, handleCategoryInputChange, addCategory } = props;

  return (
    <Col>
      <LeftSubTitle>Add new category</LeftSubTitle>
      <InputGroup className="mt-4">
        <Input
          placeholder="New category"
          type="text"
          value={category}
          onChange={handleCategoryInputChange}
        />
      </InputGroup>
      <Button
        className="w-100 mt-3"
        outline
        color="primary"
        onClick={addCategory}
      >
        Add
      </Button>
    </Col>
  );
}
