import styles from './button.css'

export function Button(props) {
    
    return (
        <button className={props.class} id={props.id} key={props.key} onClick={props.func}>{props.text}</button>
    )
}