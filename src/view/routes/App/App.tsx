import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useState } from "react";
import "./App.css";
import { ViewType } from "./model";
import { useApplicationViewModel } from "./view/hooks";
import { CategoriesView, TodosView } from "./view/routes";

function App() {
  const [view, setView] = useState(ViewType.Categories);

  const { categoriesViewModel, todosViewModel } = useApplicationViewModel();

  const changeView = useCallback((value: ViewType) => {
    setView(value);
  }, []);

  const View = (props: { view: ViewType }) => {
    return props.view === ViewType.Categories ? (
      <CategoriesView
        editor={categoriesViewModel}
        todoEditor={todosViewModel}
        changeView={changeView}
      />
    ) : (
      <TodosView editor={todosViewModel} changeView={changeView} />
    );
  };

  return (
    <div className="App my-5">
      <View view={view} />
    </div>
  );
}

export default App;
