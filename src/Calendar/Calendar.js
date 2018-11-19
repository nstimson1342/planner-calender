import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

class CalendarApp extends Component {
  state = {
    date: new Date(),
};

  onChange = date => this.setState({ date })
  onClickDay = (value) => alert('Clicked day: ', value)

  render() {
    return (
      <div>
        <Calendar
          className="react-calendar"
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay}
          view="month"
          calendarType="ISO 8601"
        />
      </div>
    );
  };
}

export default CalendarApp
