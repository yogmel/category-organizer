import React, { ChangeEvent, useCallback } from "react";
import { observer } from "mobx-react";
import { Input } from "reactstrap";
import { Category } from "../../../../model";
import { Todo } from "../../../../model/Todo";
import { TodosViewModel } from "../../../../viewmodel";
import { useCategoryTodos } from "../../../hooks/useCategoryTodos";
import { CheckboxList } from "../../../styled";
import { autorun, reaction } from "mobx";

interface TodoListProps {
  category: Category;
  todoEditor: TodosViewModel;
}

function TodoList(props: TodoListProps) {
  const { category, todoEditor } = props;

  const todos = useCategoryTodos(category.todos, todoEditor.todos);

  autorun(() => {
    const todos2 = useCategoryTodos(category.todos, todoEditor.todos);
    console.log("todos2", todos2);
  });

  reaction(
    () => todoEditor.isUpdating,
    () => {
      console.log("todoEditor", todoEditor.todos);
    }
  );

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, todo: Todo) => {
      console.log("e", e.target.checked);
      console.log("todo", todo);
      todoEditor.update(todo.id, { checked: e.target.checked });
    },
    []
  );

  return (
    <CheckboxList>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Input
              addon
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={todo.checked}
              onChange={(e) => handleCheckboxChange(e, todo)}
            />
            {todo.description}
          </li>
        );
      })}
    </CheckboxList>
  );
}

export default observer(TodoList);
