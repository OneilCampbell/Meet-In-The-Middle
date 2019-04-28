import React, { Component } from 'react';
import "./style.css";
import VenueListing from "../VenueListing/VenueListing";

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [
      {   
        name: "Village-Vanguard",
        street_address: "178 7th Ave S",
        city: "New York",
        state: "NY",
        zip_code: 10014,
        description_tags: ["Jazz", "Beer", "Dancing", "Club" ],
        description: "One of the most iconic jazz clubs in the world."
      },
      {
        name: "Maialino",
        street_address: "2 Lexington Ave, New York, NY 10010",
        city: "New York",
        state: "NY",
        zip_code: 10010,
        description_tags: ["Italian", "Wine", "Pasta", "Restaurant" ],
        description: "Classic Roman-Italian soul food in an a casual but elegant setting."
      }
    ]
  }
  }


  render() {
    let allVenues = this.state.venues;
    let VenueListings = allVenues.map( venue => <VenueListing venue={venue} />) 
    return ( 
      <div className="results-page">
        <p className="card-title results-in">Results Are In!</p>
        {VenueListings}
      </div>
     );
  }
}
 
export default ResultsPage;