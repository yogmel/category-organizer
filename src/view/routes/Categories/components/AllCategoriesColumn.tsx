import React, { useCallback, useState } from "react";
import { Col, Button } from "reactstrap";
import { observer } from "mobx-react";
import ModalAddTodo from "./ModalAddTodo";
import TodoList from "./TodoList";
import { CategoriesViewModel, TodosViewModel } from "../../../../viewmodel";
import { RightSubTitle, CheckboxListContainer } from "../../../styled";

interface AllCategoriesColumnProps {
  editor: CategoriesViewModel;
  todoEditor: TodosViewModel;
}

function AllCategoriesColumn(props: AllCategoriesColumnProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");

  const { editor, todoEditor } = props;

  const addTodo = (categoryId: number) => {
    editor.addTodo(categoryId, todo);
    closeModal();
  };

  const todoInputChange = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <Col>
      <RightSubTitle>All categories</RightSubTitle>
      {editor.categories.map((category) => {
        return (
          <CheckboxListContainer key={category.id} className="mt-4 text-left">
            <h5>{category.name}</h5>
            <TodoList category={category} todoEditor={todoEditor} />
            <Button outline color="primary" onClick={openModal}>
              Add new todo
            </Button>
            <ModalAddTodo
              modal={modal}
              todoInputChange={todoInputChange}
              closeModal={closeModal}
              addTodo={addTodo}
              categoryId={category.id}
            />
          </CheckboxListContainer>
        );
      })}
    </Col>
  );
}

export default observer(AllCategoriesColumn);