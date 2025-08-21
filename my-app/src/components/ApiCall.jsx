import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ApiCall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("data", data.data);
      setData(data.data);
    } catch (error) {
      console.log("Error making post request", error);
    } finally {
      setLoading(false);
      console.log("Api Call completed");
    }
  };

  return (
    <>
      <div>Todos</div>
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        {data.map((e) => (
          <h4>
            {e.id} - {e.title}
          </h4>
        ))}{" "}
      </div>
    </>
  );
}

export default ApiCall;
