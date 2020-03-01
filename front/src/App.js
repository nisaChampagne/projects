import React, {useState, useEffect} from 'react';
import './App.css';
import PrivateRoute from './utils/PrivateRoute'

import HomePage from './homepage/homepage'
import NavBar from './navbar/navbar'
import Drum from './projects/drum/drum'
import Random from './projects/randomRest/randomRest'
import { Route, Switch } from 'react-router-dom'
import ProjectsList from './projects/projectsList/projectsList'
import Counter from './projects/counter/counter'
import Calculator from './projects/calculator/calculator'
import Calc from './projects/easierCalc/calc'
import Calendar from './projects/calendar/calendar'
import Todo from './projects/todoList/Todo'
import GroceryList from './projects/bettertodo/todo'

import LightMode from './utils/lightmode.png'
import DarkMode from './utils/darkmode.png'




function App() {
  const [theme, setTheme] = useState('Day')


  const toggleNight = ()=> {
    localStorage.setItem('Theme', 'Night')
    setTheme('Night')
  }
  
  const toggleLight = ()=> {
    localStorage.setItem('Theme', 'Day')
    setTheme('Day')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('Day')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <div className={"App " + theme} >
      <NavBar/>
      <button className='button'
            onClick={toggleLight}>
            {theme === 'Day'}
            <img src={LightMode} onClick={toggleLight}style={{outline: 'none',width:'25px', height: '25px'}}/>
          </button>
          <button className='button'
            onClick={toggleNight}>
            {theme === 'Night'}
            <img src={DarkMode} style={{width:'25px', height: '25px' }}/>
          </button>
      <Switch>
        <PrivateRoute exact path="/projectlist" component={ProjectsList} />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/groceryList" component={GroceryList}/>
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/easiercalc" component={Calc} />
        <Route exact path="/calc" component={Calculator} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/random" component={Random}/>
        <Route exact path="/drum" component={Drum} />
      </Switch>
    </div>
  );
}

export default App;
