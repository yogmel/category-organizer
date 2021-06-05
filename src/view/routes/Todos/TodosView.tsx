import React, { useCallback } from "react";
import { observer } from "mobx-react";
import { Container, Row, Col } from "reactstrap";
import { Category, ViewType } from "../../../model";
import { CategoriesViewModel, TodosViewModel } from "../../../viewmodel";
import { Header } from "../../components";
import {
  IconContainer,
  LeftSubTitle,
  RightSubTitle,
  ListContainer,
} from "../../styled";

interface TodosViewProps {
  editor: TodosViewModel;
  categoryEditor: CategoriesViewModel;
  changeView: (value: ViewType) => void;
}

function TodosView(props: TodosViewProps) {
  const { editor, categoryEditor, changeView } = props;

  console.log("uncompleted", editor.uncompletedTodos);
  console.log("completed", editor.completedTodos);

  const handleChangeView = useCallback(() => {
    changeView(ViewType.Categories);
  }, []);

  const getCategoryById = (categoryId: number): string => {
    const category = categoryEditor.categories.find(
      (category) => category.id === categoryId
    );

    return category?.name || "";
  };

  return (
    <Container>
      <IconContainer>
        <Header title="Todos" onClick={handleChangeView} />
      </IconContainer>

      <Row className="mt-4">
        <Col>
          <LeftSubTitle>Completed</LeftSubTitle>
          <ListContainer>
            <h5>Cake Factory</h5>
            <ul>
              {editor.completedTodos?.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
              ))}
            </ul>
          </ListContainer>
        </Col>
        <Col>
          <RightSubTitle>Not Completed</RightSubTitle>
          <ListContainer>
            <h5>Cake Factory</h5>
            <ul>
              {editor.uncompletedTodos?.map((todo) => (
                <li key={todo.id}>
                  {todo.description} ({getCategoryById(todo.categoryId)})
                </li>
              ))}
            </ul>
          </ListContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default observer(TodosView);
