import { makeAutoObservable } from "mobx";
import { Todo } from "../model/Todo";

export class TodosViewModel {
  todos: Todo[] = [];
  id = 0;
  isUpdating = false;
  editingTodo?: Todo;

  constructor() {
    makeAutoObservable(this);
  }

  add(description: string): Todo {
    const newTodo = new Todo({ id: this.id++, description });
    this.todos.push(newTodo);
    return newTodo;
  }

  getTodo(todoId: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === todoId);
  }

  get completedTodos(): Todo[] | undefined {
    return this.todos.filter((todo) => todo.checked);
  }

  get uncompletedTodos(): Todo[] | undefined {
    return this.todos.filter((todo) => !todo.checked);
  }

  setIsUpdating(value: boolean): void {
    this.isUpdating = value;
  }

  setEditingTodo(value?: Todo): void {
    this.editingTodo = value;
  }

  update(todoId: number, data: Partial<Todo>) {
    const todo = this.getTodo(todoId);
    if (todo && data) {
      console.log("aloka", todo.copy(data));
      this.setEditingTodo(todo.copy(data));
    }
  }
}
