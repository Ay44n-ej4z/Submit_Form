import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/action/authActions";
import "./SignIn.css"


const SignIn = () => {
  const auth= useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <div className = "login">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h3 >Sign In</h3>
        <div className = "input">
        <input
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        ></input>
        <input
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        ></input>
        <button
          variant="contained"
          color="primary"
          type="submit"
        >
          SignIn
        </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
