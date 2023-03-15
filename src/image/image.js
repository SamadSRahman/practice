import React, { useRef, useState } from "react";
import "./image.css";
import { Button } from "../button/button";
import img1 from "./Taj-Mahal-Agra-India.webp";
import img2 from "./Colosseum-Rome-Italy.webp";
import img3 from "./El-Castillo-pyramid-plaza-Toltec-state-Yucatan.webp";
import img4 from "./Great-Wall-of-China-Beijing.webp";
import img5 from "./Khaznah-Petra-Jordan.webp";
import img6 from "./Machu-Picchu.webp";
import img7 from "./statue-Christ-the-Redeemer-Rio-de-Janeiro.webp";
export function Image() {
  const image = [img1, img2, img3, img4, img5, img6, img7];
  const [count, setcount] = useState(0);

  function handleClick() {
    setcount(count + 1);
    if (count > 5) {
      setcount(0);
    }
  }

  return (
    <div className="container1">
      <div className="imgwrapper">
        <img src={image[count]} />
      </div>
      <div className="btnwrapper">
        <Button func={handleClick} text="Change Pic" class="imgBtn" />
      </div>
    </div>
  );
}
