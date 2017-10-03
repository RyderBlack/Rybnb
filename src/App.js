import React, { Component } from 'react';
import listings from './listings';
//import './App.css';
//import SearchBar from 'material-ui-search-bar';
import SliderRange from './component/SliderRange';
import GMap from './component/GMap';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AutoComplete from 'material-ui/AutoComplete';


class App extends Component {


state = {
  listings: listings
}

  render() {
    return (
      <div className="App">
        <p>Hello {this.state.listings[0].host_name} on est dans App.js</p>
        
        <SliderRange />
        <GMap mapDetails={this.state.listings}/>
      </div>
    );
  }
}

export default App;
