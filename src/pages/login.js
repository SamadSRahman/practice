import styles from "./login.module.css";
import { Button } from "../components/buttons/button";
import { CgProfile } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { InputField } from "../components/inputField/inputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { Navbar } from "../components/navbar/navbar";
export function Login(props) {
  const [isVisible, setIsVisible] = useState(true);
  const style = { display: "none" };
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
      <Navbar />

      <div className={styles.body}>
        <div className={styles.loginDiv}>
          <img
            className={styles.profilePic}
            alt="profile picture"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1679947750~exp=1679948350~hmac=f5a129e1e954008b4bb1bc44cc60f3b87aa6ce07134f0ab2461ebcac498c545e"
          />
          <div style={isVisible ? style : {}} className={styles.emailDiv}>
            <AiOutlineMail />
            <InputField
              show={isVisible}
              type="text"
              class="emailInput"
              placeholder="EMAIL"
            />
          </div>
          <div className={styles.usernameDiv}>
            <FaUserAlt />
            <InputField
              type="text"
              class="usernameInput"
              placeholder="USERNAME"
            />
          </div>
          <div className={styles.passDiv}>
            <FiLock />
            <InputField
              type="password"
              class="passInput"
              placeholder="PASSWORD"
            />
          </div>
          <div className={styles.extContainer}>
            <div style={isVisible ? {} : style} className={styles.txtDiv}>
              <label>Don't have an account?</label>
              <br />
              <label
                className={styles.regLabel}
                onClick={() => setIsVisible(!isVisible)}
              >
                Register
              </label>
            </div>
            <Button class="signinBtn" text="Login" show={!isVisible} />
            <Button class="regBtn" text="Register" show={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}
