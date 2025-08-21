import "./App.css";
import ApiCall from "./components/apicall";
import Counter from "./features/counter/counter";
import AnimationComp from "./components/Animation";

function App() {
  return (
    <>
      <AnimationComp />
      <Counter />
      <ApiCall />
    </>
  );
}

export default App;
