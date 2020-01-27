import React from 'react'

export default function RestaurantChooser(){
    let rando = ["McDonalds", "Burger King", "AppleBees", "Texas Roadhouse", "Chili's", "{INSERT CHINESE RESTAURANT HERE}", "Buffalo Wild Wings"]

    function random (arr){
        return arr[Math.floor(arr.length * Math.random())]
    }
    
    return(
        <div>
        <h1 style={{color: "black"}}>Hey lets go to: {random(rando)}
        </h1>
        </div>
    )
}