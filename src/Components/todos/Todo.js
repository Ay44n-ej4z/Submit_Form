import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete } from "@material-ui/icons";
// import moment from "moment";
import "./Todo.css"
import { deleteTodo  } from "../../store/action/todoActions";

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo, todos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth);
  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo({ ...foundTodo });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // const handleCheck = (id) => {
  //   dispatch(checkTodo(id));
  // };

  return (

      <div className = "list">
        <div className = "output">
          
          {todo.isComplete ? (    
            <ul variant="subtitle1" className={classes.checked}>
              {todo.name}
              
            </ul>
          ) : (
            <div className = "items">
              <div className = "name">
            <ul>
            Admin:- {user.name}
              
              </ul>
              </div>
              <div className = "task">
              <ul>
           Task:- {todo.name}
           </ul>
           </div>
           </div>
          )}
          
        </div>
        <div className = "btn grp">
          {auth._id && (auth._id === todo.uid) ? (
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
  
              <Button onClick={() => handleOnUpdateClick(todo._id)}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(todo._id)}>
                <Delete color="secondary" />
                
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    
  );
};

export default Todo;
