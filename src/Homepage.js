import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Calendar from 'react-calendar';
import Quill from './Quill/Quill.js';
import 'react-quill/dist/quill.snow.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import UnicursalHexagram from './unicursal-hexagram.gif';
import IconButton from '@material-ui/core/IconButton';
import MagicCircle from './magic-circle.png';
import CalendarApp from './Calendar/Calendar.js';
import axios from 'axios';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Entries from './savedEntries/Entries.js';

class Homepage extends Component {
  state = {
    panelExpanded: false,
    entry: '',
    data: [],
    title: '',
    anchorEl: null
};

  onInputChange = (value) => {
    this.setState({
      entry: value
    })
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.currentTarget.value
    })
  }

  handleClose = () => {
   this.setState({ anchorEl: null });
 };

 handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  entryHandler = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/entries',
      data: {
        body: this.state.entry,
        title: this.state.title
      }
    })
    .then((res) => {
      console.log('response', res)
      this.setState({
        entry: '',
        title: ''
      })
    })
  }

  togglePanel = () => {
    this.setState({
      panelExpanded: !this.state.panelExpanded
    })
  }

  render() {
    const { anchorEl } = this.state;

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
          <label htmlFor="title">Title</label>
          <input onChange={this.onTitleChange} value={this.state.title} type="text" id="title" />
        <div className='Quill'>
          <Quill entry={this.state.entry} onInputChange={this.onInputChange}/>
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
        <Button onClick={this.handleClick}>
          Saved-Entries
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          >
            <MenuItem>
              <Link to='/entries'>Entries</Link>
            </MenuItem>
        </Menu>
        <h2>Observe, Act, Reflect, Adjust, Respond: (Repeat)</h2>
        <p>There are apparent patterns to the climates of awareness within any given mindscape, or framework of perception, and one can learn to better anticipate the procession of these seasons through habitual observation and reflection.  When these patterns can be accounted for, relevant preparations can be made, allowing for a more graceful and harmonious transition from one state to another.</p>
        <h2>Gaining orientation can be an ongoing process; cultivate awareness to perpetuate understanding.</h2>
      </div>
    );
  }
}

export default Homepage;
