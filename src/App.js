import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Homepage from './Homepage'
import Entries from './savedEntries/Entries';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route exact path='/entries' component={ Entries }/>
      </Switch>
    );
  }

}

export default App;
