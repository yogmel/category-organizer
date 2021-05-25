import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodosView } from "./view/routes";

function App() {
  return (
    <div className="App my-5">
      <TodosView />
    </div>
  );
}

export default App;
