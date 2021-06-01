import { makeAutoObservable } from "mobx";
import { Todo } from "../model/Todo";

export class TodosViewModel {
  todos: Todo[] = [];
  id = 0;

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

  update(todoId: number, data: Partial<Todo>) {
    let todo = this.getTodo(todoId);
    if (todo && data) {
      todo = { ...todo, ...data };
    }
    console.log("todo vm", todo);
  }
}
