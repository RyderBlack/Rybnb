import React, { Component } from 'react';
import {Row,Input, Icon, Button} from 'react-materialize';


export default class Searchbar extends Component {
  render() {
    return (
      <div className="wrapbar">
      <Row>
      <h1 className="col s3">RYBNB</h1>
      <Input className="searchbar" type="text" label="Search here" placeholder="enter a city, ZIPcode..." s={6} />
      <div className="col s2">
      <Button waves='light'  className="button">GO!<Icon left>search</Icon></Button>
      </div>
      </Row>
      </div>
    );
  }
}

