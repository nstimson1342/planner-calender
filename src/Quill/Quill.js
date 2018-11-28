import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class Quill extends Component {

  render() {
    return (
      <ReactQuill value={this.props.entry}
                  onChange={this.props.onInputChange} />
    )
  }
}
export default Quill
