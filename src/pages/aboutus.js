import styles from "./aboutus.module.css";
import { Button } from "../components/buttons/button";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
export function AboutUs(props) {
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
        <h1>About Us</h1>
        <div className={styles.imgWrapper}>
          <img
            className={styles.imgSelf}
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
          <p>
            Samad Rahman <br />
            Front End Developer from Kolkata. Graduated from Calcutta University
            with Bachelors of Science in 2022. Highly motivated and intersted to
            learn new discoveries in the field of Web Development.
          </p>
          <br />
        </div>
        <div className={styles.blocks}>
          <p className={styles.specialTxt}>
            Age: 22 <br />
            Location: Kolkata
          </p>
          <div className={styles.skillsDiv}>
            <p>
              Excellent Knowledge of :<br />
              -HTML
              <br />
              -CSS
              <br />
              -JavaScript
            </p>
          </div>
          <div className={styles.skillsDiv}>
            <p>
              Hobbies: <br />
              -Musician
              <br />
              -Singer
              <br />
              -Songwriter
            </p>
          </div>
          <div className={styles.skillsDiv}>
            <p>
              {" "}
              Skills in Development: <br />
              Right now I am honing my skills of React JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
