import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import "./loginPage.css";
import { Label } from "../label/label";
import { Input } from "../input/input";
import { Button } from "../button/button";

export function LoginPage() {
    const [show, setShow] = useState(false)
    const style = {display:'none'}

    function handleClick(){
        setShow(!show)
    }
 
  return (
    <div className="container">
      <div className="containerLogin" style={show?style:{}}>
        <div className="heading">
          <h1>Welcome!</h1>
          <Label text="Login in your account" /> <br /> <br /> <br />
        </div>
        <div className="inputFields">
          <Label text="Email" /> <br />
          <Input type="text" /> <br />
          <Label text="Password" /> <br />
          <Input type="text" />
          <div className="outerDiv">
            <div className="innerDiv">
              <Input type="checkbox" class="checkBox" />
              <Label text="Remember Me" />
            </div>
            <Label class="fpLabel" text="Forget Password?" />
          </div>
        </div>
        <div className="Btns">
          <Button text="Login" class="loginBtn" /> <br />
          <Label text="-----------------or----------------" />
          <br />
          <Button text="Continue with Google" class="gBtn" />
          <Button text="Continue with Facebook" class="gBtn" />
          <Label text="Don't have an account?" />
          <Label func={handleClick} text="Sign Up" class="signUp" />
        </div>
      </div>
      <div className="containerSignUp" style={show?{}:style}>
        <h1>Sign Up!</h1>
        <Label text="Create a new account" />
        <br />
        <br />
        <br />
        <Label text="First Name" />
        <br />
        <Input type="text" />
        <br />
        <Label text="Last Name" />
        <br />
        <Input type="text" />
        <br />
        <Label text="Email" />
        <br />
        <Input type="text" />
        <br />
        <Label text="Password" />
        <br />
        <Input type="password" />
        <br />
        <Button text="Register" class="regBtn" /><br/>
        <div className="lbl">
        <Label text="Already have an account?"/>
        <Label func={handleClick} text="Login" class="signUp" />
        </div>
      </div>
    </div>
  );
}
