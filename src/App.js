import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar';
import MyComponent from './Quill/Quill.js';
import 'react-quill/dist/quill.snow.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import UnicursalHexagram from './unicursal-hexagram.gif';
import IconButton from '@material-ui/core/IconButton';
import MagicCircle from './magic-circle.png';
import CalendarApp from './Calendar/Calendar.js';

class App extends Component {
  state = {
    panelExpanded: false
};

  togglePanel = () => {
    this.setState({
      panelExpanded: !this.state.panelExpanded
    })
  }

  render() {
    return (
      <div>
        <AppBar className='AppBar'>
          <Button onClick={() => this.togglePanel() }>
            <p>Push For Menu</p>
            <ExpansionPanel
              expanded={this.state.panelExpanded}
            >
              <img src={ UnicursalHexagram } style={{height: 500, width: 500}} alt='' />
            </ExpansionPanel>
          </Button>
        </AppBar>
            <div className='CalendarDiv'>
              <h2>A Modern World Timescape, One Day At A Time</h2>
              <CalendarApp />
            </div>
            <div className='Quill'>
              <MyComponent />
            </div>
          <IconButton className='Magic-circle' href='http://www.google.com'>
            <img src={ MagicCircle} style={{height: 400, width: 400 }} alt=''/>
          </IconButton>
      </div>
    );
  }
}

export default App;
