import { observer } from "mobx-react";
import React, { ChangeEvent, useCallback } from "react";
import { Input } from "reactstrap";
import { Todo } from "../../../../model/Todo";
import { useApplicationViewModel } from "../../../hooks";

interface TodoListItemProps {
  todo: Todo;
}

function TodoListItem(props: TodoListItemProps) {
  const {
    todo: { id, checked, description },
  } = props;

  const { todosViewModel } = useApplicationViewModel();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    todosViewModel.update(id, { checked: e.target.checked });
  }, []);

  return (
    <li key={id}>
      <Input
        addon
        type="checkbox"
        aria-label="Checkbox for following text input"
        checked={checked}
        onChange={onChange}
      />
      {description}
    </li>
  );
}

export default observer(TodoListItem);
