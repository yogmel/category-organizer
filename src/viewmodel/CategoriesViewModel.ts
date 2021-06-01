import { makeAutoObservable } from "mobx";
import { Category } from "../model";
import { Todo } from "../model/Todo";
import { TodosViewModel } from "./TodosViewModel";

export class CategoriesViewModel {
  id = 0;
  categories: Category[] = [];

  constructor(private todosViewModel: TodosViewModel) {
    makeAutoObservable(this);
  }

  get allTodos(): Todo[] {
    return this.todosViewModel.todos;
  }

  addCategory(name: string) {
    const newCategory = new Category({
      id: this.id++,
      name,
    });
    this.categories.push(newCategory);
  }

  findCategory(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  addTodo(categoryId: number, description: string): void {
    const category = this.findCategory(categoryId);
    const todo = this.todosViewModel.add(description);
    category?.addTodo(todo.id);
  }

  updateTodo(todoId: number, data: Partial<Todo>) {
    this.todosViewModel.update(todoId, data);
  }
}
