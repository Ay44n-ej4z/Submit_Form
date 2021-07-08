import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../../store/action/todoActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddTodo.css"


const AddTodo = ({ todo, setTodo }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth);
    const [timeTable, setTimeTable] = useState({
        time: "",
      });
  const [checkOutDate, setCheckOutDate] = useState(null);


  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
    dispatch(addTodo(""));

  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo._id){
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,    
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }
            
            dispatch(updateTodo(updatedTodo, id));

        } else{
            const newTodo = {
                ...todo,
                date: new Date()
            }

            dispatch(addTodo(newTodo));
        }
        setTodo({ name: '', isComplete: false});
        setTodo("")
    }
    return (  
        <form noValidate autoComplete="off"  onSubmit = { handleSubmit } name =  "task">
        <div className = "head">
            <div>
                <div className = "card">
         <div className = "task">            
            <p>Task Description</p>
            <input
            id="enter-todo"
            label="enterToDo"
            variant="outlined"
            autoFocus
            value = {todo.name}
            onChange = {(e) => setTodo({...todo, name: e.target.value})}
            ></input>
            </div>
            <div className = "datetime">
               <div className = "date">
                <p>Date</p>
                <DatePicker 
                // selected = {startDate}
                // onChange = {(e) => setStartDate({ ...startDate, dates: e.target.value })}
                // dateFormat = "dd/mm/yyyy"
                // minDate = {new Date()}
                selected={checkOutDate}
                minDate = {new Date()}
                onChange={handleCheckOutDate}
                showYearDropdown
                scrollableMonthYearDropdown
                // onChange = {(e) => setTodo({...todo, name: e.target.value})}
                />
                </div>
                <div className = "time">
                <p>Time</p>      
            <input
            type = "Time"
            onChange={(e) => setTimeTable({ ...timeTable, time: e.target.value })}
            value = {timeTable.time}
            
            ></input>
            </div>       
            </div>
            <div className = "user">
                <p>Assign User</p>
                <select>
        <option> {user.name} </option> 
            </select>
            </div>
            <div className = "btn">
            <button type = "submit" >Save</button>
            <button>Cancel</button>
            </div>
            {/* <button>Edit</button> */}
                </div>
            </div>
        </div>
        </form>
        
     );
}
 
export default AddTodo;