import { makeAutoObservable } from "mobx";

interface Category {
  name: string;
  id: number;
  todosIds: number[];
}

export class CategoriesViewModel {
  id = 0;
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
    console.log("alokaa");
  }

  addCategory(name: string) {
    const newCategory = {
      id: this.id++,
      name,
      todosIds: [],
    };
    console.log("id", this.id);
    this.categories.push(newCategory);
  }
}
