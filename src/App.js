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
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Todos} />            
          </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
