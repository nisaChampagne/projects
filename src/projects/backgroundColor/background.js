import React from 'react'
import '../../App.css'

export default function BackgroundColor(){
    const body = document.querySelector('body')

    const colorsArr = ['red','orange','yellow','green','blue','indigo','violet']

    body.style.backgroundColor='teal'
    function changeBackground(){
        const colorChoices = parseInt(Math.random() * colorsArr.length + 1)
        body.style.backgroundColor = colorsArr[colorChoices]
    }

    return(
        <div className='backgroundHolder'>
            <button onClick={changeBackground}>Click Me</button>
        </div>
    )
}