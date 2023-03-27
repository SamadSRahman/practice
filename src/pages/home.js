import styles from "./home.module.css";
import { Button } from "../components/buttons/button";
import { RiLightbulbFlashLine } from "react-icons/ri";
import img from "./Untitled 3.jpg";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
export function Home(props) {
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
        <div className={styles.textWrapper}>
          <h1>
            Amazing Web Designs for <RiLightbulbFlashLine /> <br /> your
            Business
          </h1>
          <Button text="Contact Us" class="contactBtn" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.homeImg} alt="BackGround Image" src={img} />
        </div>
      </div>
    </div>
  );
}
