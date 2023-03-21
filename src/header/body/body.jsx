import styles from "./body.module.css";
import image from "./Untitled 3 2.jpeg";

export function Body() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.textContainer}>
        <label className={styles.txt}>TOTALLY FREE</label>
        <h1 className={styles.bodyTxt}>
          Let's bring your team together in onclick
        </h1>
        <p className={styles.txt}>
          We help you to manage all of your Work and daily task in office
        </p>
        <button className={styles.gsBtn}>Get Started</button>
        <button className={styles.useBtn}>How to use</button>
      </div>
      <div className={styles.imgContainer}>
        <img style={{ width: "100%" }} src={image} alt="" />
      </div>
    </div>
  );
}
