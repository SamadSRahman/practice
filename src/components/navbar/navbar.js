import styles from "./navbar.module.css";
import { Button } from "../buttons/button";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const pagebykey = {
    "About Us": "/aboutus",
    Login: "/login",
    Home: "/",
  };
  function redirect(key) {
    const pathToRedirect = pagebykey[key];
    navigate(pathToRedirect);
  }
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <h5>UI/UX Design</h5>
        <div className={styles.btnWrapper}>
          <Button func={() => redirect("Home")} text="Home" class="homeBtn" />
          <Button
            func={() => redirect("About Us")}
            text="About Us"
            class="aboutUsBtn"
          />
          <Button
            func={() => redirect("Login")}
            text="Login"
            class="loginBtn"
          />
          <CgProfile size={25} />
        </div>
      </div>
    </div>
  );
}
