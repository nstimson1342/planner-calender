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
import axios from 'axios';

class App extends Component {
  state = {
    panelExpanded: false,
    entry: '',
    data: []
};

  componentDidMount() {
    axios.get('http://localhost:8080/api/entries')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
    console.log(error);
    });
  }

  onInputChange = (value) => {
    this.setState({
      entry: value
    })
  }

  entryHandler() {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/entries',
      data: {
        newEntry: this.state.entry
      }
    })
    .then(res => {
      console.log('response', res)
    })
  }

  togglePanel = () => {
    this.setState({
      panelExpanded: !this.state.panelExpanded
    })
  }

  render() {
    return (
      <div className='App'>
        <AppBar className='AppBar'>
          <Button onClick={() => this.togglePanel()}>
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
              <h2>What's On Your Mind Today?</h2>
            <div className='Quill'>
              <MyComponent onInputChange={this.onInputChange}/>
              <Button onClick={() => this.entryHandler()}>
                  <p>Button</p>
              </Button>
            </div>
            <div>
              <h2>For Further Assistance, Enter Rabit-hole Below</h2>
            </div>
          <IconButton className='Magic-circle' href='http://www.google.com'>
            <img src={ MagicCircle} style={{height: 400, width: 400 }} alt=''/>
          </IconButton>
          <h2>It can take you anywhere you can possibly imagine, and beyond!</h2>
      </div>
    );
  }
}

export default App;
