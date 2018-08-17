import React, { Component } from 'react';
import listings from './listings';
//import './App.css';
import SearchBar from './component/Searchbar';
import SliderRange from './component/SliderRange';
import ListingsGrid from './component/ListingsGrid';
//import GMap from './component/GMap';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AutoComplete from 'material-ui/AutoComplete';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      listings : listings
    }
  }
  
  /*
  componentDidMount() {    

    var self = this;
    fetch(url)
    .then( function(results) {
      return results.json();
    })
    .then(data => {
      self.setState({ listings: data });
      console.log(this.state.listings);
    });
  }
*/

  render() {
    return (
      <div className="App">
        <SearchBar />   
        <SliderRange /> 
        <ListingsGrid  listingsDetails={this.state.listings}/>
        
      </div>
    );
  }
}

export default App;
