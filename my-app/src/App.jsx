import "./App.css";
import ApiCall from "./components/apicall";
import Counter from "./features/counter/counter";
import AnimationComp from "./components/Animation";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <>
      <AnimationComp />
      <Counter />
      {/* <ApiCall /> */}
      <TodoList />
    </>
  );
}

export default App;
