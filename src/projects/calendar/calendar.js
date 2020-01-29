import React, { Component } from "react";
import Calendar from "react-calendar";

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
        <Calendar className={['c1']} onChange={this.onChange} value={this.state.d} />
      </div>
    );
  }
}
export default ReactCalendar;