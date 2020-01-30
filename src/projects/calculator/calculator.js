import React, {useState} from "react";
import "./calculator.scss";
import Numbers from './ButtonComponents/NumberButtons/numbers';
import Operators from './ButtonComponents/OperatoButtons/Operator/operators';
import Specials from './ButtonComponents/SpecialButtons/Specials';
import Screen from './DisplayComponents/screen';

import  back from '../../utils/backArrow.png'
import { NavLink } from "react-router-dom";


function App() {
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
        <NavLink to="/projectlist" exact className="notification_link"><img style={{width: '30px', height:'30px', display: 'flex'}}src={back}/></NavLink>
        <Screen data={number}/>
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