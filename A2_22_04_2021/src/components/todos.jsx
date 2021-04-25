import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import "../css/todos.css";
import Todo from "./todo"

const Todos = ({ data }) => {
  console.log(data);
  return (
    <div className="main-wrapper">
      {data.loading ?
           <>
           {" "}
           <Spinner animation="grow" variant="light" size="xl" />
           <h2 style={{color:"white",margin:20}} >Loading...</h2>
         </>
        : data.error==="" ?
     
        <ListGroup>
            {data.data.map(todos=>{
                return <Todo key={todos.id} title={todos.title}/>
            })}
        </ListGroup> :
         <>
         {" "}
        
         <h2 style={{color:"white"}} >{data.error}</h2>
       </>
      } 
    
    </div>
  );
};

export default Todos;
