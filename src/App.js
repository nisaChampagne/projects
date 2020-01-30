import React from 'react';
import './App.css';
import PrivateRoute from './utils/PrivateRoute'

import HomePage from './homepage/homepage'
import NavBar from './navbar/navbar'
import Drum from './projects/drum/drum'
import Random from './projects/randomRest/randomRest'
import BackgroundColor from './projects/backgroundColor/background'
import { Route, Switch } from 'react-router-dom'
import ProjectsList from './projects/projectsList/projectsList'
import BackgroundHex from './projects/backgroundHex/backgroundHex'
import Counter from './projects/counter/counter'
import Calculator from './projects/calculator/calculator'
import Calc from './projects/easierCalc/calc'
import Calendar from './projects/calendar/calendar'
import Todo from './projects/todoList/Todo'
import Router from './projects/blog/router'

function App() {
  return (
    <div className="App" >
      <NavBar />
      <HomePage />
      <Switch>
        <PrivateRoute exact path="/projectlist" component={ProjectsList} />
        <Route exact path="/blog" component={Router} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/easiercalc" component={Calc} />
        <Route exact path="/calc" component={Calculator} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/backgroundHex" component={BackgroundHex} />
        <Route exact path="/random" component={Random}/>
        <Route exact path="/drum" component={Drum} />
        <Route exact path="/backgroundColor" component={BackgroundColor} />
      </Switch>
    </div>
  );
}

export default App;
