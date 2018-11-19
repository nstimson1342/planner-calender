import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Entries from './Quill/entries.js';

class PrivateApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      value: '',
      words: '',
      disabled: true,
      title: '',
      reps: '',
      initial: 0,
      finished: false
    }

      // sets entries state from componentDidMount in entries.js
      fetchedEntries(results) {
        const entries = results.reverse()
        this.setState({
          entries: entries
        })
      }
      // Passed down to Editor.js through Profile.js. stores value in text editor
      // counts words (words are passed as props down to Editor.js)
      handleChange(editorState) {
        this.setState({
          value: editorState
        })
        if (this.textInput.current) {
          let field = this.textInput.current.getEditor().getText().split(/\s+/)
          this.setState({
            words: field
          })
        }
        if (this.state.words.length - 1 >= 500) {
          this.setState({
            disabled: false
          })
        } else {
          this.setState({
            disabled: true
          })
        }
      }
      // clears text from text editor field upon submitting entry.
      clear() {
        this.setState({
          value: '',
          words: ''
        })
      }

return (
<BrowserRouter>
  <PrivateRoute path='/entries'
                    component={Entries}
                    // methods and handlers
                    fetchedEntries={this.fetchedEntries.bind(this)}
                    // state
                    entries={this.state.entries}/>

                    render() {
<BrowserRouter/>
)
}

export default PrivateApp
