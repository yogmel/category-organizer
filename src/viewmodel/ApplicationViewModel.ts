import { CategoriesViewModel } from "./CategoriesViewModel";
import { TodosViewModel } from "./TodosViewModel";

export class ApplicationViewModel {
  static instance: ApplicationViewModel;
  categoriesViewModel: CategoriesViewModel;
  todosViewModel: TodosViewModel;

  private constructor() {
    console.log("Application View Model called!");
    this.categoriesViewModel = new CategoriesViewModel();
    this.todosViewModel = new TodosViewModel();
  }

  static getInstance(): ApplicationViewModel {
    if (!ApplicationViewModel.instance) {
      ApplicationViewModel.instance = new ApplicationViewModel();
    }
    return ApplicationViewModel.instance;
  }
}
