import React, { Component } from "react";
import Calendar from "react-calendar";

import  back from '../../utils/backArrow.png'
import { NavLink } from "react-router-dom";


import './calendar.scss'

class ReactCalendar extends Component {
  state = {
    d: new Date()
  };

  onChange = d => {
    this.setState(d);
  };

  render() {
    return (
      <div className='calendarHolder'>
        <NavLink to="/projectlist" exact className="notification_link"><img style={{width: '30px', height:'30px', display: 'flex'}}src={back}/></NavLink>
        <Calendar className={['c1']} onChange={this.onChange} value={this.state.d} />
      </div>
    );
  }
}
export default ReactCalendar;