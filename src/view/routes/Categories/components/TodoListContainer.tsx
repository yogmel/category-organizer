import { observer } from "mobx-react";
import { ReactNode, useCallback } from "react";
import { Button } from "reactstrap";
import { Category } from "../../../../model";
import { CheckboxListContainer } from "../../../styled";

interface TodoListContainerProps {
  category: Category;
  children: ReactNode;
  setEditingCategory: (category: Category) => void;
  setEditingTodo: (todo: string) => void;
}

function TodoListContainer(props: TodoListContainerProps) {
  const { category, children, setEditingCategory, setEditingTodo } = props;

  const onClick = useCallback(() => {
    setEditingCategory(category);
    setEditingTodo(" ");
  }, []);

  return (
    <CheckboxListContainer key={category.id} className="mt-4 text-left">
      <h5>{category.name}</h5>
      {children}
      <Button outline color="primary" onClick={onClick}>
        Add new todo
      </Button>
    </CheckboxListContainer>
  );
}

export default observer(TodoListContainer);
