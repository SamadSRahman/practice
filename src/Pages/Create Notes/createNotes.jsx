import React from "react";
import styles from "./createNotes.module.css";
import { Button } from "../../components/button/button";
import { notesList } from "../../components/atom";
import { useRecoilState } from "recoil";
import { useState } from "react";

export function CreateNotes() {
  const [notes, setNotes] = useRecoilState(notesList);
  const [input, setInput] = useState("");

  function handleAdd() {
    const newNote = [...notes, input]
    setNotes(newNote);
    setInput("");
  }
  return (
    <div className={styles.createDiv}>
      <h1>Create Notes</h1>
      <textarea className={styles.createTextArea}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      /><br/>
      <Button class="addBtn" func={handleAdd} text="Add Notes" />
    </div>
  );
}
