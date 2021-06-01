import { Container, Row } from "reactstrap";
import { IconContainer } from "../../styled";
import { CategoriesViewModel, TodosViewModel } from "../../../viewmodel";
import { ViewType } from "../../../model";
import React, { useCallback, useState } from "react";
import { Header } from "../../components";
import { AddCategoryColumn, AllCategoriesColumn } from "./components";
import { observer } from "mobx-react";

interface CategoriesViewProps {
  editor: CategoriesViewModel;
  todoEditor: TodosViewModel;
  changeView: (value: ViewType) => void;
}

function CategoriesView(props: CategoriesViewProps) {
  const { editor, changeView, todoEditor } = props;

  const [category, setCategory] = useState<string>("");

  const handleChangeView = useCallback(() => {
    changeView(ViewType.Todos);
  }, []);

  const handleCategoryInputChange = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const addCategory = () => {
    editor.addCategory(category);
    setCategory("");
  };

  return (
    <Container>
      <IconContainer>
        <Header title="Category" onClick={handleChangeView} />
      </IconContainer>

      <Row className="mt-4">
        <AddCategoryColumn
          category={category}
          handleCategoryInputChange={handleCategoryInputChange}
          addCategory={addCategory}
        />
        <AllCategoriesColumn editor={editor} todoEditor={todoEditor} />
      </Row>
    </Container>
  );
}

export default observer(CategoriesView);
