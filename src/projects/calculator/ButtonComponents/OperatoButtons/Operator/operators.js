import React, {useState} from "react";
import OperatorButton from './operatorbuttons';
//import any components needed
import {operators} from '../../../data';
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [calcOperators, setCalcOperation] = useState(operators);
  return (
    <div className='operatorBtnHolder'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcOperators.map( (operator, index) => <OperatorButton key={index} operator={operator} changeData={props.changeData} />)}
    </div>
  );
};

export default Operators;