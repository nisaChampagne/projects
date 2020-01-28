import React from 'react'
import './calc.scss'

const Calc = () => {
   
    //retrieve data from numbers that are clicked
    window.onload= function(){
        //JS was getting loaded befoe the HTML so it couldnt find the elements
        // had to put all my JS code into a window.onload function 
        const buttons = document.querySelectorAll('.btn');
        const equal = document.querySelector('.btn-equal');
        const screen = document.querySelector('.screenCalc');
        const clear = document.querySelector('.btn-clear');

        buttons.forEach((button) =>{
            button.addEventListener('click', (e)=>{
            let value = e.target.dataset.num;
            screen.value += value;
            })
        });

        equal.addEventListener('click', (e) =>{
            if(screen.value === ''){
            screen.value = 'Please Enter a Value';
            } else {
            let answer = eval(screen.value);
            screen.value = answer;
            }
        })

        clear.addEventListener('click', (e)=>{
            screen.value = '';
        })
    

    }
    

    return(
        <>
        <div className='holder'>
          <form>
            <input type="text" name="" id="" className="screenCalc"/>
          </form>
            <div className='calculator'>
                <div className="buttons">
                    <button type="button" className="btn btn-yellow" data-num="*">*</button>
                    <button type="button" className="btn btn-yellow" data-num="/">/</button>
                    <button type="button" className="btn btn-yellow" data-num="-">-</button>
                    <button type="button" className="btn btn-yellow" data-num="+">+</button>
                    <button type="button" className="btn btn-grey" data-num=".">.</button>
                    <button type="button" className="btn btn-grey" data-num="9">9</button>
                    <button type="button" className="btn btn-grey" data-num="8">8</button>
                    <button type="button" className="btn btn-grey" data-num="7">7</button>
                    <button type="button" className="btn btn-grey" data-num="6">6</button>
                    <button type="button" className="btn btn-grey" data-num="5">5</button>
                    <button type="button" className="btn btn-grey" data-num="4">4</button>
                    <button type="button" className="btn btn-grey" data-num="3">3</button>
                    <button type="button" className="btn btn-grey" data-num="2">2</button>
                    <button type="button" className="btn btn-grey" data-num="1">1</button>
                    <button type="button" className="btn btn-grey" data-num="0">0</button>
                    <button type="button" className="btn-equal btn-grey">=</button>
                    <button type="button" className="btn-clear btn-grey">C</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Calc