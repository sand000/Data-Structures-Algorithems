//Withput Redux

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
      <div className="text-3xl font-bold text-indigo-600 mb-4 text-center ">
        Todos
      </div>
      <div className="flex flex-col gap-3 text-left">
        {data.map((e) => (
          <div
            key={e.id}
            className="hover:cursor-pointer flex items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-md px-4 py-2 hover:scale-105 transition-transform"
          >
            <span className="inline-block bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 shadow">
              {e.id}
            </span>
            <span className="text-lg font-medium text-gray-800">{e.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiCall;
