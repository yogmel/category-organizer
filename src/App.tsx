import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useApplicationViewModel } from "./view/hooks";
import { CategoriesView, TodosView } from "./view/routes";

function App() {
  const { categoriesViewModel, todosViewModel } = useApplicationViewModel();

  return (
    <div className="App my-5">
      <TodosView editor={todosViewModel} />
      <CategoriesView editor={categoriesViewModel} />
    </div>
  );
}

export default App;
