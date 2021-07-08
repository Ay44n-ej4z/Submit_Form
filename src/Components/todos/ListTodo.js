import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../../store/action/todoActions";


const ListTodos = ({ todo, setTodo }) => {
  const auth= useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos);
//   const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodos());
  }, [todo._id, dispatch]);

  if (!auth._id) return <Redirect to="/signin" />;

  return (
    <>
      <div >
        <ul >
            
          {" "}
          {/* {todos.length > 0 ? "theTodos;" : "NoTaskYet;"}{" "} */}
        </ul>
        {todos &&
          todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo._id}
                setTodo={setTodo}
                todos={todos}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListTodos;
