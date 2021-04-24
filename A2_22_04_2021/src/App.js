import { FetchHook } from "./components/hook";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/todos";

function App() {
  const data = FetchHook("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className="App">
      <Todos data={data} />
    </div>
  );
}

export default App;
