import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";

const API_KEY =
  "pk.eyJ1IjoiYmVzdGFubHkiLCJhIjoiY2pxdHpteW55MDEzazQzcWp1eThieGE2NyJ9.b22fYf0b0DatwKulWWzNLg";
const OPEN_CAGE_API = "22a610e878824282b19af539b55299dd";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        width: "90%",
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
      },
      userLocations: [
        {
          address: "10-20 46th Rd Long Island City, NY 11101",
          longitude: "",
          latitude: ""
        },
        {
          address: "420 W 26th St New York, NY 10001",
          longitude: "",
          latitude: ""
        },
        {
          address: "47 S 8th St Brooklyn, NY 11249",
          longitude: "",
          latitude: ""
        }
      ],
      venueLocations: [
        {
          address: "178 7th Ave S, New York, NY 10014",
          longitude: "",
          latitude: ""
        },
        {
          address: "2 Lexington Ave, New York, NY 10010",
          longitude: "",
          latitude: ""
        }
      ]
    };
  }
  componentDidMount() {
    this.getCoords();
  }
  getCoords = async () => {
    const coords = [];

    for (let i = 0; i < locations.length; i++) {
      const address = encodeURI(locations[i].address);
      const response = await Axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${OPEN_CAGE_API}`
      );
      const { lat, lng } = response.data.results[0].geometry;
      coords.push({ latitude: lat, longitude: lng });
    }
  };
  render() {
    return (
      <div className="map-container">
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={API_KEY}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}

export default Map;
