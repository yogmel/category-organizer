import { makeAutoObservable } from "mobx";
import { CategoriesViewModel } from "./CategoriesViewModel";
import { TodosViewModel } from "./TodosViewModel";

export class ApplicationViewModel {
  static instance: ApplicationViewModel;
  categoriesViewModel: CategoriesViewModel;
  todosViewModel: TodosViewModel;

  private constructor() {
    makeAutoObservable(this);
    this.todosViewModel = new TodosViewModel();
    this.categoriesViewModel = new CategoriesViewModel(this.todosViewModel);
  }

  static getInstance(): ApplicationViewModel {
    if (!ApplicationViewModel.instance) {
      ApplicationViewModel.instance = new ApplicationViewModel();
    }
    return ApplicationViewModel.instance;
  }
}
