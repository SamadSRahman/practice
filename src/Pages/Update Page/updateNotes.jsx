import React from "react";
import styles from "./updateNotes.module.css";
import { notesList, atomIsVisible } from "../../components/atom";
import { useRecoilState } from "recoil";
import { Button } from "../../components/button/button";
import { useState } from "react";

export function UpdateNotes() {
  const [notes, setNotes] = useRecoilState(notesList);
  const [isVisible, setIsVisible] = useRecoilState(atomIsVisible);
  const [input, setInput] = useState("");

  function handleUpdate(i) {
    setIsVisible(true);
  }

  function handleDone(note, index) {
    const update = [...notes];

    for (let i = 0; i < update.length; i++) {
      if (i === index) {
        update[i] = input;
        break;
      }
    }

    setNotes(update);
    setIsVisible(false);
  }
  return (
    <div>
      <h1>Update Notes</h1>
      <div>
        {notes.map((x, i) => (
          <>
            <div key={i}>
              <div>
                <textarea
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  disabled={isVisible ? false : true}
                >
                  {x}
                </textarea>
                <button
                  style={isVisible ? { display: "none" } : {}}
                  onClick={() => {
                    handleUpdate(i);
                  }}
                  className={styles.updBtn}
                >
                  Update
                </button>
                <button
                  style={isVisible ? {} : { display: "none" }}
                  onClick={() => {
                    handleDone(x, i);
                  }}
                  className={styles.doneBtn}
                >
                  Done
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
