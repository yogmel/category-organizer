import { observer } from "mobx-react";
import React, { ChangeEvent, useCallback } from "react";
import { Button, Col, Input, InputGroup } from "reactstrap";
import { CategoriesViewModel } from "../../../../viewmodel";
import { LeftSubTitle } from "../../../styled";

interface AddCategoryColumnProps {
  editor: CategoriesViewModel;
}

export function AddCategoryTodoColumn(props: AddCategoryColumnProps) {
  const { editor } = props;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    editor.setEditingCategoryName(e.target.value);
  }, []);

  return (
    <Col>
      <LeftSubTitle>Add new category</LeftSubTitle>
      <InputGroup className="mt-4">
        <Input
          placeholder="New category"
          type="text"
          value={editor.editingCategoryName}
          onChange={onChange}
        />
      </InputGroup>
      <Button
        className="w-100 mt-3"
        outline
        color="primary"
        onClick={editor.addCategory}
      >
        Add
      </Button>
    </Col>
  );
}

export default observer(AddCategoryTodoColumn);
