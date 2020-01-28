import React from 'react';
import './App.css';

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


function App() {
  return (
    <div className="App">
      <NavBar />
      <ProjectsList/>
      <Switch>
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
