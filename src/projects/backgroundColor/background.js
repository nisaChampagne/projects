import React from 'react'
import '../../App.css'

import  back from '../../utils/backArrow.png'
import { NavLink } from "react-router-dom";


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
            <NavLink to="/projectlist" exact className="notification_link"><img style={{width: '30px', height:'30px', display: 'flex'}}src={back}/></NavLink>
            <button className="backgroundBtn"onClick={changeBackground}>Click Me</button>
        </div>
    )
}