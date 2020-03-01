import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { List } from 'semantic-ui-react'

import '../../App.css'


export default function ProjectList(){

    return(
        <div className="App">
            <List>List of Projects</List>
            <List.Item><NavLink to="/todo" exact className="notification_link" style={{color: '#c28285'}}>Todo List</NavLink></List.Item>
            <List.Item><NavLink to="/easiercalc" exact className="notification_link" style={{color: '#c28285'}}>Easier Calc</NavLink></List.Item>
            <List.Item><NavLink to="/calc" exact className="notification_link" style={{color: '#c28285'}}>Calculator</NavLink></List.Item>
            <List.Item><NavLink to="/counter" exact className="notification_link" style={{color: '#c28285'}}>Counter</NavLink></List.Item>
            <List.Item><NavLink to="/calendar" exact className="notification_link" style={{color: '#c28285'}}>Calendar</NavLink></List.Item>
            <List.Item><NavLink to="/random" exact className="notification_link" style={{color: '#c28285'}}>Random</NavLink></List.Item>
            <List.Item><NavLink to="/drum" exact className="notification_link" style={{color: '#c28285'}}>Drum</NavLink></List.Item>
            <List.Item><NavLink to="/backgroundColor" exact className="notification_link" style={{color: '#c28285'}}>Background Color</NavLink></List.Item>
        </div>
    )
}