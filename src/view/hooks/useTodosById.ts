import { Todo } from "../../model/Todo";
import { useApplicationViewModel } from "./useApplicationViewModel";

export function useTodosById(categoryTodos: number[]): Todo[] {
  const {
    todosViewModel: { todos },
  } = useApplicationViewModel();

  return todos.filter((todo) => categoryTodos.includes(todo.id));
}
