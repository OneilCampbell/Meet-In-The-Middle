import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";
import Axios from "axios";
import userIcon from "./user-icon.ico";
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
        "W 69th St New York, NY 10133",
        "60 W 125th St New York, NY 10027",
        "1185 Park Ave New York, NY 10128"
      ],
      userCoords: [],
      areUsersLoaded: false,
      venueLocations: [
        "Park Drive North, E 72nd St, New York, NY 10021",
        "2315 Broadway, New York, NY 10024"
      ],
      venueCoords: [],
      areVenuesLoaded: false
    };
  }
  componentDidMount() {
    this.getCoords();
  }
  getCoords = async () => {
    const userCoords = [];
    const { userLocations } = this.state;
    const venueCoords = [];
    const { venueLocations } = this.state;

    for (let i = 0; i < userLocations.length; i++) {
      const address = encodeURI(userLocations[i]);
      userCoords.push(
        await Axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${OPEN_CAGE_API}`
        )
      );

      //   const { lat, lng } = response.data.results[0].geometry;
      //   coords.push({ latitude: lat, longitude: lng });
    }
    for (let i = 0; i < venueLocations.length; i++) {
      const address = encodeURI(venueLocations[i]);
      venueCoords.push(
        await Axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${OPEN_CAGE_API}`
        )
      );

      //   const { lat, lng } = response.data.results[0].geometry;
      //   coords.push({ latitude: lat, longitude: lng });
    }
    Promise.all(userCoords).then(responses => {
      const coords = responses.map(response => {
        return {
          latitude: response.data.results[0].geometry.lat,
          longitude: response.data.results[0].geometry.lng
        };
      });
      this.setState(prevState => {
        return {
          viewport: {
            ...prevState.viewport,
            latitude: coords[2].latitude,
            longitude: coords[2].longitude
          },
          userCoords: [...coords],

          areUsersLoaded: true
        };
      });
    });

    Promise.all(venueCoords).then(responses => {
      const coords = responses.map(response => {
        return {
          latitude: response.data.results[0].geometry.lat,
          longitude: response.data.results[0].geometry.lng
        };
      });
      this.setState({
        venueCoords: [...coords],
        areVenuesLoaded: true
      });
    });
  };
  render() {
    const {
      areUsersLoaded,
      areVenuesLoaded,
      userCoords,
      venueCoords
    } = this.state;
    console.log(this.state);

    return areUsersLoaded && areVenuesLoaded ? (
      <div className="map-container">
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={API_KEY}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.state.userCoords.map((userCoord, i) => {
            const { latitude, longitude } = userCoord;
            return (
              <Marker
                key={i}
                latitude={latitude}
                longitude={longitude}
                offsetLeft={-20}
                offsetTop={-10}
                //   closeButton={false}
                //   closeOnClick={false}
                //   anchor="top"
                //   onClose={() => {}}
              >
                <i className="fas fa-street-view" />
              </Marker>
            );
          })}
          {this.state.venueCoords.map((venueCoord, i) => {
            const { latitude, longitude } = venueCoord;
            return (
              <Marker
                key={i}
                latitude={latitude}
                longitude={longitude}
                offsetLeft={-20}
                offsetTop={-10}
                //   closeButton={false}
                //   closeOnClick={false}
                //   anchor="top"
                //   onClose={() => {}}
              >
                <i className="fas fa-map-marker-alt" />
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    ) : (
      "Loading..."
    );
  }
}

export default Map;
