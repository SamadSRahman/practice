import styles from "./navbar.module.css";
import { Button } from "../button/button";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export function Navbar(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <h5 onClick={() => navigate("/")}>Lucky Number</h5>
        <div className={styles.btnWrapper}>
          <Button func={() => navigate("/home")} text="Home" class="homeBtn" />
          <Button
            func={() => navigate("/aboutus")}
            text="About Us"
            class="aboutUsBtn"
          />
          <Button
            func={() => navigate("/login")}
            text="Login"
            class="loginBtn"
          />
          <Button
            func={() => navigate("/register")}
            text="Register"
            class="regBtn"
          />
          <CgProfile size={25} />
        </div>
      </div>
    </div>
  );
}
