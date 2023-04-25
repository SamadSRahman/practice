import React from "react";
import styles from "./Table.module.css"
import { useSelector, useDispatch } from "react-redux";
import { addBtn } from "./TableSlice";

export function Table() {
 
    const dispatch = useDispatch();

     const btnList = useSelector((state) => state.table.value)
    // const btns = ['Btn 1', 'Btn 2', 'Btn 3', 'Btn 4', 'Btn 5', 'Btn 6', 'Btn 7', 'Btn 8', 'Btn 9', 'Btn 10', 'Btn 11', 'Btn 12', 'Btn 13', 'Btn 14', 'Btn 15', 'Btn 16', 'Btn 17', 'Btn 18', 'Btn 19', 'Btn 20', 'Btn 21', 'Btn 22', 'Btn 23', 'Btn 24', 'Btn 25', 'Btn 26', 'Btn 27', 'Btn 28', 'Btn 29', 'Btn 30',]
    

    return (
        <div>
            {btnList.map((buttonText) => (
                <button
                    onClick={(buttonText) => { dispatch(addBtn(buttonText)) }}
                >
                    {buttonText.name}</button>
            ))}
        </div>
    )
}