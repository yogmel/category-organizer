interface Todo {
  id: number;
  description: string;
  checked: boolean;
  categoryId: number;
}

export class TodosViewModel {
  todos: Todo[] = [];
}
