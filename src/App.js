import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Todos from './Components/todos/Todos';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import NavBar from './Components/Navbar/Navbar';
import { loadUser } from "./store/action/authActions";
import Sidebar from './Components/Sidebar/Sidebar';
import ControlForm from './Components/todos/ControlForm';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
        <Sidebar />
        <NavBar />
          <Switch>
            {/* <ControlForm />             */}
            <Route path="/" component={Todos} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            
          </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
