export class Category {
  name = "";
  id = 0;
  todos: number[] = [];

  constructor(data: Partial<Category> = {}) {
    Object.assign(this, data);
  }

  addTodo(todoId: number) {
    this.todos.push(todoId);
  }
}
