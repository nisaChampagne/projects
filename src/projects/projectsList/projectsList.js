import React from 'react'
import { Link, NavLink } from "react-router-dom";


export default function ProjectList(){
    return(
        <div>
            <h1> I hold things!</h1>
            <ul>List of things:</ul>
            <li><NavLink to="/todo" exact className="notification_link">Todo List</NavLink></li>
            <li><NavLink to="/easiercalc" exact className="notification_link">Easier Calc</NavLink></li>
            <li><NavLink to="/calc" exact className="notification_link">Calculator</NavLink></li>
            <li><NavLink to="/counter" exact className="notification_link">Counter</NavLink></li>
            <li><NavLink to="/calendar" exact className="notification_link">Calendar</NavLink></li>
            <li><NavLink to="/random" exact className="notification_link">Random</NavLink></li>
            <li><NavLink to="/drum" exact className="notification_link">Drum</NavLink></li>
            <li><NavLink to="/backgroundColor" exact className="notification_link">Background Color</NavLink></li>
        </div>
    )
}