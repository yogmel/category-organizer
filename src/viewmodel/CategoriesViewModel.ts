import { makeAutoObservable } from "mobx";
import { Category } from "../model";
import { Todo } from "../model/Todo";
import { TodosViewModel } from "./TodosViewModel";

export class CategoriesViewModel {
  id = 0;
  categories: Category[] = [];
  categoryTodosNumbers: number[] = [];
  editingCategoryName = "";
  editingCategory?: Category;
  editingTodo: string | undefined;

  constructor(private todosViewModel: TodosViewModel) {
    makeAutoObservable(this);
  }

  get allTodos(): Todo[] {
    return this.todosViewModel.todos;
  }

  setCategoryTodos = (value: number[]): void => {
    this.categoryTodosNumbers = value;
  };

  get categoryTodos(): Todo[] {
    return this.todosViewModel.todos.filter((todo) =>
      this.categoryTodosNumbers.includes(todo.id)
    );
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

  setEditingCategory = (category: Category | undefined) => {
    this.editingCategory = category;
  };

  setEditingTodo = (description: string | undefined) => {
    this.editingTodo = description;
  };

  findCategory(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  addTodo(): void {
    if (this.editingTodo && this.editingCategory) {
      const todo = this.todosViewModel.add(
        this.editingCategory.id,
        this.editingTodo
      );
      this.editingCategory.addTodo(todo.id);
    }
  }

  reset = () => {
    this.setEditingTodo(undefined);
    this.setEditingCategory(undefined);
  };

  updateTodo(todoId: number, data: Partial<Todo>) {
    this.todosViewModel.update(todoId, data);
  }
}
