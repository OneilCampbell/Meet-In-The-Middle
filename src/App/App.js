import React, { Component } from "react";
import "./App.css";
import { SessionMaker } from "./components/SessionMaker/SessionMaker";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import ProfilePage from "./components/Profile/Profile";
import Map from "./components/Map/Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: 0
    };
  }

  VIEWS = [<ProfilePage />];
  backView = () => {
    if (this.state.viewIndex > 0) {
      this.setState({ viewIndex: this.state.viewIndex + 1 });
    }
  };

  nextView = () => {
    if (this.state.viewIndex > 0) {
      this.setState({ viewIndex: this.state.viewIndex + 1 });
    }
  };

  render() {
    return (
      <div>
        <div className="App">Meet Me Halfway</div>
        <Login />
        {this.VIEWS[this.state.viewIndex]}
        <SessionMaker />

        <button onClick={this.backView}>Back</button>
        <button onClick={this.nextView}>Next</button>
        <Map />
      </div>
    );
  }
}

export default App;
