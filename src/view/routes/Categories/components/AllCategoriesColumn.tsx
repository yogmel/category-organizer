import { Col } from "reactstrap";
import { observer } from "mobx-react";
import ModalAddTodo from "./ModalAddTodo";
import TodoList from "./TodoList";
import { CategoriesViewModel } from "../../../../viewmodel";
import { RightSubTitle } from "../../../styled";
import TodoListContainer from "./TodoListContainer";

interface AllCategoriesColumnProps {
  editor: CategoriesViewModel;
}

function AllCategoriesColumn(props: AllCategoriesColumnProps) {
  const { editor } = props;

  console.log("editor", editor);

  return (
    <Col>
      <RightSubTitle>All categories</RightSubTitle>
      {editor.categories.map((category) => (
        <TodoListContainer
          key={category.id}
          category={category}
          setEditingCategory={editor.setEditingCategory}
          setEditingTodo={editor.setEditingTodo}
        >
          <TodoList category={category} />
        </TodoListContainer>
      ))}
      <ModalAddTodo modal={!!editor.editingTodo} editor={editor} />
    </Col>
  );
}

export default observer(AllCategoriesColumn);
