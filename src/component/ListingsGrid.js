import React, { Component } from 'react';
import '../App.css';
import {Card, CardTitle} from 'react-materialize';


export default class ListingsGrid extends Component {

  render() {

    let markersListings = this.props.listingsDetails.map((data, index) => 

        <div className="col s4" key={index}>
            <Card className="card_fix" header={
                <CardTitle reveal image={data.picture_url} waves='light'/>}
		    title={data.name}
		    reveal={<p>{data.description}</p>}>
		        <p><a href={data.listing_url} target="_blank">View more</a></p>
            </Card>     
        </div>
   )

    return (   
        <div className="row">
            {markersListings}
        </div>
    );
  }
}
