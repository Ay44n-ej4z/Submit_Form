import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/action/authActions";
import "./SignUp.css"

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <div className = "SignUp">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h4>signUp</h4>
        <div className = "input">
        <input
          id="enter-name"
          placeholder="enterName"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          id="enter-email"
          placeholder="enterEmail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <input
          id="enter-password"
          type="password"
          placeholder="enterPassword"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button
          variant="contained"
          color="primary"
          type="submit"
        >
          SignUp
        </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
