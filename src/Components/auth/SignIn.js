import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
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
      > <div className = "name">
        <h3>Sign In</h3>
        </div>
        <div className = "input">
        <Input
          id="enter-email"
          placeholder="Enter-Email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        ></Input>
        <Input
          id="enter-password"
          type="password"
          placeholder="Enter-Password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        ></Input>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          SignIn
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
