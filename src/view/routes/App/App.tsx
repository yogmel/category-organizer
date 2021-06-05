import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useState } from "react";
import "./styles/App.css";
import { ViewType } from "./../../../model";
import { useApplicationViewModel } from "./../../hooks";
import { CategoriesView } from "../Categories";
import { TodosView } from "../Todos";

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
      <TodosView
        editor={todosViewModel}
        categoryEditor={categoriesViewModel}
        changeView={changeView}
      />
    );
  };

  return (
    <div className="App my-5">
      <View view={view} />
    </div>
  );
}

export default App;
