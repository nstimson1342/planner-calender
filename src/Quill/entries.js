const mongoose = require('mongoose');

class Entries extends React.Component {
  state = {
    expanded: null,
  };

  componentDidMount() {
    let routeUrl;
    if (process.env.NODE_ENV === 'development') {
      routeUrl = 'http://localhost:2000/verify/entry'
    } else {
      routeUrl = '/verify/entry'
    }
    fetch(routeUrl,
     {
        method: 'GET',
        headers: {
          'Content-type' : 'application/json',
        }
      })
      .then((results) => results.json())
      .then(data => {
        this.props.fetchedEntries(data)
      })
      .catch((err) => console.log(err))
  }

  parseHTML(str) {
      let el = document.createElement( 'div' )
      el.innterHTML = str
      console.log(el)
      return el
    }
render() {
  return(

  )
}

export default Entries
