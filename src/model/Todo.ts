export class Todo {
  id = 0;
  description = "";
  checked = false;
  categoryId = 0;

  constructor(data: Partial<Todo> = {}) {
    Object.assign(this, data);
  }

  copy(data: Partial<Todo>): Todo {
    return Object.assign(this, data);
  }
}
