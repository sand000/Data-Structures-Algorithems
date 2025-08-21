import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todosThunk";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  {
    loading;
  }
  return <p>Loading todos....</p>;
  {
    error;
  }
  return <p>Error: {error}</p>;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
    >
      {todos.map((e) => (
        <h4>
          {e.id} - {e.title}
        </h4>
      ))}{" "}
    </div>
  );
}

export default TodoList;
