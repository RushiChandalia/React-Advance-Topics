import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {                                         //useEffect will run once when component will mount
    fetch("https://jsonplaceholder.typicode.com/todos")     //will fetch data from the api
      .then((response) => response.json())
      .then((json) => setData(json));                       // set the data to our state
  }, []);
  return (
    <div>
      {data.map((todo) => {                                 //map the data and show the title
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default Fetch;
