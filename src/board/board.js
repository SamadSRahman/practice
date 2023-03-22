import styles from "./board.module.css";
import { useRef, useState } from "react";

export function Board() {
  const initial = ["", "", "", "", "", "", "", "", ""];
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState("");
  const [name, setName] = useState(initial);

  const style = { display: "none" };

  function handleButtonClick(i) {
    let c = 0;
    const nameCheck = [...name];

    if (nameCheck[i] === "") {
      setShow(!show);
      nameCheck[i] = show ? "O" : "X";
      setName(nameCheck);

      if (
        (nameCheck[0] === "X" &&
          nameCheck[1] === "X" &&
          nameCheck[2] === "X") ||
        (nameCheck[3] === "X" &&
          nameCheck[4] === "X" &&
          nameCheck[5] === "X") ||
        (nameCheck[6] === "X" &&
          nameCheck[7] === "X" &&
          nameCheck[8] === "X") ||
        (nameCheck[0] === "X" &&
          nameCheck[3] === "X" &&
          nameCheck[6] === "X") ||
        (nameCheck[1] === "X" &&
          nameCheck[4] === "X" &&
          nameCheck[7] === "X") ||
        (nameCheck[2] === "X" &&
          nameCheck[5] === "X" &&
          nameCheck[8] === "X") ||
        (nameCheck[0] === "X" &&
          nameCheck[4] === "X" &&
          nameCheck[8] === "X") ||
        (nameCheck[2] === "X" && nameCheck[4] === "X" && nameCheck[6] === "X")
      ) {
        setDisplay("Player 2 wins");
      } else if (
        (nameCheck[0] === "O" &&
          nameCheck[1] === "O" &&
          nameCheck[2] === "O") ||
        (nameCheck[3] === "O" &&
          nameCheck[4] === "O" &&
          nameCheck[5] === "O") ||
        (nameCheck[6] === "O" &&
          nameCheck[7] === "O" &&
          nameCheck[8] === "O") ||
        (nameCheck[0] === "O" &&
          nameCheck[3] === "O" &&
          nameCheck[6] === "O") ||
        (nameCheck[1] === "O" &&
          nameCheck[4] === "O" &&
          nameCheck[7] === "O") ||
        (nameCheck[2] === "O" &&
          nameCheck[5] === "O" &&
          nameCheck[8] === "O") ||
        (nameCheck[0] === "O" &&
          nameCheck[4] === "O" &&
          nameCheck[8] === "O") ||
        (nameCheck[2] === "O" && nameCheck[4] === "O" && nameCheck[6] === "O")
      ) {
        setDisplay("Player 1 wins");
      } else {
        for (let i = 0; i <= 8; i++) {
          if (nameCheck[i] == "") c++;
        }
        if (c == 0) {
          setDisplay("Match Drawn");
        }
      }
    }
  }
  function handleReset() {
    setName(initial);
    setDisplay("");
    setShow(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <button className={styles.button} onClick={() => handleButtonClick(0)}>
          {name[0]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(1)}>
          {name[1]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(2)}>
          {name[2]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(3)}>
          {name[3]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(4)}>
          {name[4]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(5)}>
          {name[5]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(6)}>
          {name[6]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(7)}>
          {name[7]}
        </button>
        <button className={styles.button} onClick={() => handleButtonClick(8)}>
          {name[8]}
        </button>
      </div>
      <h1 style={display ? {} : style}>{display}</h1>
      <button
        className={styles.startBtn}
        style={display ? {} : style}
        onClick={handleReset}
      >
        {" "}
        Start Again
      </button>
    </div>
  );
}
