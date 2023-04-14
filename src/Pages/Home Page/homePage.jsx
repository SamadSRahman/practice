import React from "react";
import styles from './home.module.css'
import { notesList } from "../../components/atom";
import { useRecoilState } from "recoil";

export function Home() {
    const [notes, setNotes] = useRecoilState(notesList)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes.map((note) => (
                    <div className={styles.noteWrapper}>
                        <p>{note}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}