import React, {useState} from "react";
import SpecialButton from './SpecialButton';
//import any components needed
import {specials} from '../../data';

 //Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [calcSpecials, setCalcspecial] = useState(specials);
  return (
    <div className='specialBtnHolder'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcSpecials.map( (special, index) => <SpecialButton key={index} special={special} changeData={props.changeData} />)}
    </div>
  );
};
export default Specials;