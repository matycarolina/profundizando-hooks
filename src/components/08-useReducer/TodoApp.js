import React, { useReducer, useEffect } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // hace que la informacion sea persistente y no se borre al refrescar la pagina
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className="row">
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="col-7">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </div>
      <div className="col-5">
        <TodoAdd handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};
