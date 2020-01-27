import React, {useState} from "react";
import "./calculator.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './ButtonComponents/NumberButtons/numbers';
import Operators from './ButtonComponents/OperatoButtons/Operator/operators';
import Specials from './ButtonComponents/SpecialButtons/Specials';
import Screen from './DisplayComponents/screen';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [number, setNumber] = useState("0");

  function onClickSpecial(special) {
    if (special === 'C') {
      setNumber("0");
    } else if (special === '%') {
      const newDisplay = number + " " + special + " ";
      setNumber(newDisplay);
    } else if (special === "+/-") {
      const currentExpression = number;
      const output = eval(currentExpression).toString();
      setNumber(output);

      if (output > 0) {
        setNumber(-Math.abs(Number(output)));
      }
      else {
        setNumber(Math.abs(Number(output)));
      }
      console.log(output)
    }
  }

  function onClickNumber(_number) {
    var currentNumber = "";

    if (number !== "0") {
      currentNumber = number;
    }

    const newNumber = currentNumber + _number;
    setNumber(newNumber);
    console.log(newNumber)
  }

  function onClickOperator(char, value) {
    if (char === '=') {
      const currentExpression = number;
      const output = eval(currentExpression).toString();
      setNumber(output);
    } else {
      const newDisplay = number + " " + value + " ";
      setNumber(newDisplay);
      console.log(newDisplay)
    }
  }
  return (
    <div className="container">
        <Screen data={number}/>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      <div className="buttonHolder">
        <div>
          <Specials changeData = {onClickSpecial} />
          <Numbers changeData = {onClickNumber} />
        </div>
        <div>
          <Operators changeData = {onClickOperator}/>
        </div>
      </div>
    </div>
  );
}

export default App;