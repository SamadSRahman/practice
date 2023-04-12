import styles from "./table.module.css";
import { billDetails, atomName, atomGrandTotal , isVisible} from "../atom";
import { useRecoilState } from "recoil";

export function Bill() {
  const [data] = useRecoilState(billDetails);
  const [name] = useRecoilState(atomName);
  const [grandTotal] = useRecoilState(atomGrandTotal)
  const [show] = useRecoilState(isVisible)
  const date = new Date()
  const currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    return(
    <div style={show? {}:{display:'none'}} className={styles.container}>
    <table>
      <thead>
        <tr>Customer Name: {name}</tr>
          <tr>Date: {currentDate}</tr>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
            <th>Total</th>
            
          </tr>
         
      </thead>

      {data.map((ele) => (
        <tbody>
          <td>{ele.product}</td>
          <td>{ele.price}</td>
          <td>{ele.quantity}</td>
          <td>{(ele.quantity*ele.price)}</td>
          
        </tbody>
        
      ))}
        <tr>
          <th>Grand total</th>
          <td></td>
          <td></td>
          <th>{grandTotal}</th>
          
        </tr>
      </table>
      </div>
  );
}
