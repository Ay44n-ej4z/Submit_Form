import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
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
      > <div className = "name">
        <h4>Sign Up</h4>
        </div>
        <div className = "input">
        <Input
          id="enter-name"
          placeholder="Enter Name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></Input>
        <Input
          id="enter-email"
          placeholder="Enter-Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></Input>
        <Input
          id="enter-password"
          type="password"
          placeholder="Enter-Password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></Input>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          SignUp
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
