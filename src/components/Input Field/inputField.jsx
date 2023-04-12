import styles from './inputField.module.css'

export function InputField(props) {
    
    return (
        <input checked={props.checked} onChange={props.func} id={props.id} type={props.type} placeholder={props.text} />
    )
}