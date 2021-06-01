import { Todo } from "../../model/Todo";

export function useCategoryTodos(
  categoryTodos: number[],
  todos: Todo[]
): Todo[] {
  return todos.filter((todo) => categoryTodos.includes(todo.id));
}
