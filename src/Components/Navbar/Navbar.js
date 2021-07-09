import React from "react";
import { Button } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/action/authActions";
import "./Navbar.css"

const NavBar = () => {
//   const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <div className = "nav" > 
              <Link to="/">
                Task
              </Link>
            {user._id ? (
              <>
                 <h3> Logged in as {user.name}</h3>
                <Button          
                  onClick={() => handleSignOut()}
                >
                <Link  to="/">
                    SignOut
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <ul>
                  <Link  to="/signin">
                    SignIn
                  </Link>
                </ul>
                <ul
              
                  >
                  <Link to="/signup">
                    SignUp
                  </Link>
                </ul>
              </>
            )}
      </div>
    </>
  );
};

export default NavBar;
