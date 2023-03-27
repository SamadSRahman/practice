import "./inputField.css";

export function InputField(props) {
  return (
    <input
      type={props.type}
      className={props.class}
      placeholder={props.placeholder}
    />
  );
}
