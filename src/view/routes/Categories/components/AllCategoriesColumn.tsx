import React, { useCallback, useState } from "react";
import { Col, Button } from "reactstrap";
import { observer } from "mobx-react";
import ModalAddTodo from "./ModalAddTodo";
import TodoList from "./TodoList";
import { CategoriesViewModel, TodosViewModel } from "../../../../viewmodel";
import { RightSubTitle, CheckboxListContainer } from "../../../styled";
import { Category } from "../../../../model";

interface AllCategoriesColumnProps {
  editor: CategoriesViewModel;
  todoEditor: TodosViewModel;
}

function AllCategoriesColumn(props: AllCategoriesColumnProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const [category, setCategory] = useState<Category>();

  const { editor, todoEditor } = props;

  const addTodo = (categoryId: number) => {
    editor.addTodo(categoryId, todo);
    closeModal();
  };

  const todoInputChange = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const openModal = useCallback((category: Category) => {
    setCategory(category);
    setModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <Col>
      <RightSubTitle>All categories</RightSubTitle>
      {editor.categories.map((category) => (
        <CheckboxListContainer key={category.id} className="mt-4 text-left">
          <h5>{category.name}</h5>
          <TodoList category={category} todoEditor={todoEditor} />
          <Button outline color="primary" onClick={() => openModal(category)}>
            Add new todo
          </Button>
        </CheckboxListContainer>
      ))}
      <ModalAddTodo
        modal={modal}
        todoInputChange={todoInputChange}
        closeModal={closeModal}
        addTodo={addTodo}
        categoryId={category?.id}
      />
    </Col>
  );
}

export default observer(AllCategoriesColumn);
