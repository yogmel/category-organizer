export class Todo {
  id = 0;
  description = "";
  checked = false;
  categoryId = 0;

  constructor(data: Partial<Todo> = {}) {
    Object.assign(this, data);
  }
}
