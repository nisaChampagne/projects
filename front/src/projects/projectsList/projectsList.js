import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { List } from 'semantic-ui-react'

import './projectsList.scss'


export default function ProjectList(){

    return(
        <div className="container">
            <List style={{color: 'white'}}>List of Projects</List>
            <List.Item><NavLink to="/todo" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Todo List</NavLink></List.Item>
            <List.Item><NavLink to="/easiercalc" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Easier Calc</NavLink></List.Item>
            <List.Item><NavLink to="/calc" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Calculator</NavLink></List.Item>
            <List.Item><NavLink to="/counter" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Counter</NavLink></List.Item>
            <List.Item><NavLink to="/calendar" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Calendar</NavLink></List.Item>
            <List.Item><NavLink to="/random" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Random</NavLink></List.Item>
            <List.Item><NavLink to="/drum" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}>Drum</NavLink></List.Item>
        </div>
    )
}