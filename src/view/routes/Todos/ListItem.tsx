import { observer } from "mobx-react";
import { Todo } from "../../../model/Todo";
import { useCategoryById } from "../../hooks";

interface ListItemProps {
  todo: Todo;
}

function ListItem(props: ListItemProps) {
  const {
    todo: { id, description, categoryId },
  } = props;

  const category = useCategoryById(categoryId);

  return (
    <li key={id}>
      {description} ({category?.name || "no category"})
    </li>
  );
}

export default observer(ListItem);
