import { observer } from "mobx-react";
import { useCallback, useState } from "react";
import { ViewType } from "../../../../model";
import { useApplicationViewModel } from "../../../hooks";
import { CategoriesView } from "../../Categories";
import { TodosView } from "../../Todos";

function View() {
  const [view, setView] = useState(ViewType.Categories);

  const changeView = useCallback((value: ViewType) => {
    setView(value);
  }, []);

  const { categoriesViewModel, todosViewModel } = useApplicationViewModel();

  return view === ViewType.Categories ? (
    <CategoriesView editor={categoriesViewModel} changeView={changeView} />
  ) : (
    <TodosView editor={todosViewModel} changeView={changeView} />
  );
}

export default observer(View);
