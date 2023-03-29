import { Button } from "./button";
import styles from "./question.module.css";
import { useRef, useState } from "react";
import { Greet } from "./greet";
export function Questions(props) {
  const [count, setCount] = useState(0);
  const ansInd = useRef(0);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [greetIsVisible, setGreetIsVisible] = useState(false);
  const [reset, setReset] = useState(false);
  const total = useRef(0);

  const questionsData = [
    {
      Question: "Today is Monday, after 63 days it will be",
      Options: ["Tuesday", "Wednesday", "Friday", "Monday"],
      correctAnswer: 0,
    },
    {
      Question:
        " A man swims 12 km downstream and 10 km upstream. If he takes 2 hours each time, what is the speed of the stream?",
      Options: ["1 km/hr", "0.5 km/hr", "0.7km/hr", "1.5 km/hr"],
      correctAnswer: 1,
    },
    {
      Question:
        " In how many years the simple interest on Rs. 6000 at 10% rate of interest S.I will become Rs. 2000?",
      Options: ["3 months", "3.5 months", "4 months", "4.5 months"],
      correctAnswer: 0,
    },
    {
      Question:
        "  The number of employees is reduced in the ratio 3: 2 and the salary of each employee are increased in the ratio 4: 5. By doing so, the company saves Rs. 12000. What was the initial expenditure on the salary?",
      Options: ["62000", "60000", "50000", "72000"],
      correctAnswer: 3,
    },
    {
      Question:
        " The day on 5th April of a year will be the same day on 5th of which month of the same year?",
      Options: ["5th July", "5th August", "5th June", "5th October"],
      correctAnswer: 0,
    },
    {
      Question: " What is the HCF of 1095 and 1168?",
      Options: ["37", "73", "43", "83"],
      correctAnswer: 1,
    },
    {
      Question:
        " A shopkeeper bought a watch for Rs. 1200. At what price should he sell the watch to earn a profit of 25% ?",
      Options: ["Rs. 1400", "Rs. 1450", "Rs. 1500", "Rs. 1550"],
      correctAnswer: 2,
    },
    {
      Question:
        "A train overtakes two persons who are walking in the same direction in which the train is going, at the rate of 2 kmph and 4 kmph and passes them completely in 9 and 10 seconds respectively. The length of the train is:",
      Options: ["45 m", "50 m", "54 m", "72 m"],
      correctAnswer: 1,
    },
    {
      Question:
        "What is called the syntax analysis part in the machine language transformation of a high-level language?",
      Options: ["lexical analysis", "semantic analysis", "parsing", "linking"],
      correctAnswer: 2,
    },
    {
      Question: "A nibble is equal to bits.",
      Options: ["4", "8", "16", "32"],
      correctAnswer: 0,
    },
  ];
  const handleSelect = (i) => {
    const test = [...checked];
    for (let j = 0; j < test.length; j++) {
      test[j] = false;
    }
    test[i] = true;
    setChecked(test);
  };
  const handleNextClick = () => {
    if (count <= 8) {
      setCount(count + 1);
    } 

    const ans = [...checked];
    for (let i = 0; i < 4; i++) {
      if (ans[i] === true) {
        ansInd.current = i;
        break;
      }
    }
    if (ansInd.current === questionsData[count].correctAnswer) {
      total.current = total.current + 2;
      console.log("right answer");
    }
    console.log(total, checked, questionsData[count].correctAnswer, ansInd);
  };
  const handleSubmitClick = () => {
    if(total.current>=12)
    setGreetIsVisible(true);
    else
    setReset(true)
  };

  const handleReset = ()=>{
    setCount(0)
    setChecked([false,false,false,false])
    setReset(false)
    total.current=0
  }
  return (
    <div className={styles.container}>
      <h2>Question {count + 1}</h2>
      <h3>{questionsData[count].Question}</h3>

      {questionsData[count].Options.map((ele, index) => (
        <form>
          <label>
            <input
              required="required"
              onClick={() => handleSelect(index)}
              checked={checked[index]}
              type={"radio"}
            />
            {ele}
          </label>
        </form>
      ))}
      <div
        style={count > 8 ? { display: "none" } : {}}
        className={styles.nextBtnDiv}
      >
        <Button class="nextBtn" func={handleNextClick} text="Next" />
      </div>
      <div
        style={count > 8 ? {} : { display: "none" }}
        className={styles.submitBtnDiv}
      >
        <Button class="submitBtn" func={handleSubmitClick} text="Submit" />
      </div>
      <div
        style={greetIsVisible ? {} : { display: "none" }}
        className={styles.greetDiv}
      >
        <Greet total={total.current} />
      </div >
      <div style={reset ? {} : { display: "none" }} className={styles.resetDiv}>\
      <h1>Better Luck Next Time</h1>
      <h4>You got {total.current} out of 20 marks</h4>
      <h5>Click on the Reset Button to retry</h5>
      <Button text="Reset" class="resetBtn" func={()=>handleReset()}/>
      </div>
    </div>
  );
}
