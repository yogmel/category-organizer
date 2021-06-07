export class Category {
  id = 0;
  name = "";
  todos: number[] = [];

  constructor(data: Partial<Category> = {}) {
    Object.assign(this, data);
  }

  copy(data: Partial<Category>): Category {
    return Object.assign(this, data);
  }

  addTodo(todoId: number) {
    this.todos.push(todoId);
  }
}
