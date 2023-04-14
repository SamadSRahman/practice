import React from "react";
import styles from './deleteNotes.module.css'
import { notesList } from "../../components/atom";
import { useRecoilState } from "recoil";
import { Button } from "../../components/button/button";


export function DeleteNotes(){
    const [notes, setNotes] = useRecoilState(notesList)
    function handleDelete(index) {
        const finalNotes = notes.filter((ele, i) => i !== index)
        setNotes(finalNotes)    
    }
    return (
        <div>
            <h1>Delete Notes</h1>
            <div>
                {notes.map((note, index) => (
                    <div className={styles.noteWrapper}>
                        <p >{note}</p>
                        <Button text="❌" func={() => { handleDelete(index) }} />
                    </div>
                ))}
            </div>
        </div>
    )
}