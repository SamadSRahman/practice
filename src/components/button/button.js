import styles from "./button.css";

export function Button(props) {
  return (
    <button
      onClick={props.func}
      style={props.show ? { display: "none" } : {}}
      className={props.class}
    >
      {props.text}
    </button>
  );
}
