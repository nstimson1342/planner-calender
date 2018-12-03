import React, { Component } from 'react';
import axios from 'axios';
import './Entries.css';

class Entries extends Component {
  constructor(props){
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/entries')
    .then((response) => {
      console.log(response);
      this.setState({
        entries: response.data
      })
    })
    .catch((error) => {
    console.log(error);
    });
  }

  entryList = (entries) => {
    const listItems = entries.map((entry) =>
      <li>{entry.body}</li>
    );
    return listItems
  }

  render() {
    console.log(this.state.entries)
    return(
      <div>
        <ol>{this.entryList(this.state.entries)}</ol>
      </div>
    )
  }
}

export default Entries
