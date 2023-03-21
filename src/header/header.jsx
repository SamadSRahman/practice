import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function Header(props) {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label className={styles.onClickLabel}>Onclick</label>
        <div className={styles.wrapper}>
          <label className={styles.label}>|</label>
          <button className={styles.label}>Home</button>
          <button className={styles.label}>Services</button>
          <button className={styles.label}>Contact</button>
          <button className={styles.label}>About Us</button>

          <div className={styles.btnContainer}>
            <button className={styles.signupBtn}>Login</button>
            <button className={styles.signupBtn}>Sign Up</button>
          </div>
        </div>
        <button className={styles.menuBtn} onClick={handleClick}>
          <GiHamburgerMenu fontSize={"20px"} />
        </button>
        <br />
      </div>
      <div className={styles.menu} style={{ display: show ? "" : "none" }}>
        <button className={styles.mBtn}>Home</button>
        <button className={styles.mBtn}>Services</button>
        <button className={styles.mBtn}>Contact</button>
        <button className={styles.mBtn}>About Us</button>
        <button className={styles.mBtn}>Login</button>
        <button className={styles.mBtn}>Sign In</button>
      </div>
    </div>
  );
}
