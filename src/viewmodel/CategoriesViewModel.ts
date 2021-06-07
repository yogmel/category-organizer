import { makeAutoObservable } from "mobx";
import { Category } from "../model";
import { Todo } from "../model/Todo";
import { TodosViewModel } from "./TodosViewModel";

export class CategoriesViewModel {
  id = 0;
  categories: Category[] = [];
  editingCategoryName = "";
  editingCategory?: Category;
  editingTodo?: string;

  constructor(private todosViewModel: TodosViewModel) {
    makeAutoObservable(this);
  }

  get allTodos(): Todo[] {
    return this.todosViewModel.todos;
  }

  setId(value: number) {
    this.id = value;
  }

  addCategory = () => {
    const newCategory = new Category({
      id: this.id++,
      name: this.editingCategoryName,
    });

    this.categories.push(newCategory);
    this.setEditingCategoryName("");
  };

  setEditingCategoryName(name: string) {
    this.editingCategoryName = name;
  }

  setEditingCategory = (category: Category) => {
    this.editingCategory = category;
  };

  setEditingTodo = (description: string) => {
    this.editingTodo = description;
  };

  findCategory(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  addTodo(): void {
    if (this.editingTodo) {
      const todo = this.todosViewModel.add(this.editingTodo);
      this.editingCategory?.addTodo(todo.id);
    }
  }

  reset() {
    this.editingTodo = undefined;
    this.editingCategory = undefined;
  }

  updateTodo(todoId: number, data: Partial<Todo>) {
    this.todosViewModel.update(todoId, data);
  }
}
