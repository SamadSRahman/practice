import styles from "./form.module.css";
import { Button } from "../Button/button";
import { InputField } from "../Input Field/inputField";
import { useState } from "react";
import { billDetails, atomName, atomGrandTotal, isVisible } from "../atom";
import { useRecoilState } from "recoil";

export function Form() {
  const [counter, setCounter] = useState(["a"]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [data, setData] = useRecoilState(billDetails);
  const [name, setName] = useRecoilState(atomName);
    const [price] = useState(60);
    const [total] = useState()
    const [grandTotal, setGrandTotal] = useRecoilState(atomGrandTotal)
    const [show, setShow] = useRecoilState(isVisible)


  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
      setCounter(counter + "a")
      const t = quantity * price
      
      setGrandTotal(grandTotal+t)
    setData([
      ...data,
      { quantity: quantity, product: selectedProduct, price: price, total:total, grandTotal:grandTotal },
    ]);
      
  }
  function handleSelect(e) {
      setSelectedProduct(e.target.value);
  }

    function handleCreateBill() {
        setShow(true)
        const t = quantity * price
      
      setGrandTotal(grandTotal+t)
    setData([
      ...data,
      { quantity: quantity, product: selectedProduct, price: price, total:total, grandTotal:grandTotal },
    ]);
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.header}>
        <h2>Billing form</h2>
        <h3>Customer Name:</h3>
        <hr />
        <hr/>
        <InputField
          text="Enter Name"
          func={(e) => {
            const newName = e.target.value;
            setName(newName);
          }}
        />
      </div>

      {Array.from(counter).map((c, index) => (
        <div className={styles.wrapper}>
          <div className={styles.dropdown}>
            <h5>Product:</h5>

            <select onChange={handleSelect} name="" id="products">
              <option>Select</option>
              <option>Sugar</option>
              <option>Coffee</option>
              <option>Oats</option>
              <option>Snacks</option>
            </select>
          </div>
          <div>
            <h5>Quantity:</h5>
            <InputField
              key={index}
              type={"number"}
              text="Enter quantity"
              func={(e) => {
                const newQuant = e.target.value;
                setQuantity(newQuant);
              }}
            />
          </div>
          <div className={styles.btndiv}>
            <Button text="Add More Item" func={() => handleAdd(index)} />
          </div>
          
    
        </div>
        
      ))}
      <Button class='' func={handleCreateBill} text="Create Bill" />
      </div>
      
  );
}
