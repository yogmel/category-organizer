import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Category, Todo } from "../../../../model";
import { useTodosById } from "../../../hooks/useTodosById";
import { CheckboxList } from "../../../styled";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  category: Category;
}

function TodoList(props: TodoListProps) {
  const { category } = props;

  // const [todos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {
  //   console.log("category", category);
  //   setTodos(todos);
  // }, []);
  console.log("category", category);

  const todos = useTodosById(category.todos);
  return (
    <CheckboxList>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </CheckboxList>
  );
}

export default observer(TodoList);
