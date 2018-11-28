import React, { Component } from 'react';
import axios from 'axios';

class Entries extends Component {
  constructor(props){
    super(props)
    this.state = {
      entries: []
    }
  }



  render() {
    return(
      <div>
        <ol>
          <li />
        </ol>
      </div>
    )
  }
}

export default Entries
