import React, { Component } from 'react';
import axios from 'axios';

class Entries extends Component {
  constructor(props){
    super(props)
    this.state = {
      entries: []
    }
  }

  onChange = () => {
    this.setState({
      entries: axios.get('http://localhost:8080/api/entries')
    })
  }

  render() {
    return(
      <div>
        <ol>
          <li onChange={this.onChange}/>
        </ol>
      </div>
    )
  }
}

export default Entries
