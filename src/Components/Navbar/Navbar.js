import React from "react";
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
                toDoApp;
              </Link>
            {user._id ? (
              <>
                  Logged in as {user.name}
                <button
                  edge="end"
                  color="inherit"
                  onClick={() => handleSignOut()}
                >
                <Link  to="/">
                    SignOut
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button
                  edge="end"
                  color="inherit"
                  >
                  <Link  to="/signin">
                    SignIn
                  </Link>
                </button>
                <button
                  edge="end"
                  color="inherit"
                  >
                  <Link to="/signup">
                    SignUp
                  </Link>
                </button>
              </>
            )}
      </div>
    </>
  );
};

export default NavBar;
