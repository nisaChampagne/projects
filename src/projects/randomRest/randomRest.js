import React from 'react'
import  back from '../../utils/backArrow.png'
import { NavLink } from "react-router-dom";




export default function RestaurantChooser(){
    let rando = ["McDonalds", "Burger King", "AppleBees", "Texas Roadhouse", "Chili's", "{INSERT CHINESE RESTAURANT HERE}", "Buffalo Wild Wings"]

    function random (arr){
        return arr[Math.floor(arr.length * Math.random())]
    }
    
    return(
        <div>
        <NavLink to="/projectlist" exact className="notification_link"><img style={{width: '30px', height:'30px', display: 'flex'}}src={back}/></NavLink>
        <h1 style={{color: "black"}}>Hey lets go to: {random(rando)}
        </h1>
        </div>
    )
}