
// using Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todosThunk";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading todos....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(60, 72, 88, 0.12)",
        maxWidth: "500px",
        margin: "2rem auto",
      }}
    >
      <h2 style={{ color: "#4f46e5", marginBottom: "1.5rem", fontWeight: 700 }}>
        📝 Todo List
      </h2>
      {todos.length === 0 ? (
        <p style={{ color: "#64748b" }}>No todos found!</p>
      ) : (
        <ul style={{ width: "100%", padding: 0, margin: 0 }}>
          {todos.map((e) => (
            <li
              key={e.id}
              style={{
                background: "#fff",
                borderRadius: "8px",
                marginBottom: "1rem",
                padding: "1rem 1.5rem",
                boxShadow: "0 2px 8px rgba(60, 72, 88, 0.08)",
                display: "flex",
                alignItems: "center",
                fontSize: "1.1rem",
                transition: "transform 0.1s",
                cursor: "pointer",
              }}
              onMouseOver={(event) =>
                (event.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(event) =>
                (event.currentTarget.style.transform = "scale(1)")
              }
            >
              <span
                style={{
                  display: "inline-block",
                  background: "#6366f1",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  textAlign: "center",
                  lineHeight: "2rem",
                  fontWeight: 600,
                  marginRight: "1rem",
                }}
              >
                {e.id}
              </span>
              <span style={{ color: "#334155" }}>{e.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
