
import React, { Component } from 'react';
import './App.css';
import { SessionMaker } from './components/SessionMaker/SessionMaker';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile'
import ProfilePage from './components/Profile/Profile';
import CreateEventPage from './components/CreateEventPage/CreateEventPage';
import Preferences from './components/Preferences/Preferences';
import InvitePage from './components/InvitePage/InvitePage';
import Confirmation from './components/Confirmation/Confirmation';
import LinkPage from './components/LinkPage/LinkPage';
import WaitingRoom from './components/WaitingRoom/Waitingroom';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewIndex: 0,
     }
  }

  VIEWS = [
    <ProfilePage />,
    <CreateEventPage/>,
    <Preferences/>,
    <InvitePage />,
    <Confirmation />,
    <LinkPage />,
    <WaitingRoom />,  
    
  ]
  backView=()=>{
    if(this.state.viewIndex > 0){
      this.setState({viewIndex: this.state.viewIndex+1})
    }
  }

  nextView=() =>{
      if(this.state.viewIndex <= this.VIEWS.length){
        this.setState({viewIndex: this.state.viewIndex-1})
      }
    }
  

  render() { 
    return (
    <div>
      <div className="App">
        Meet Me Halfway
      </div>
      <Login/>
      {this.VIEWS[this.state.viewIndex]}
      <SessionMaker/>

      <button onClick={this.backView}>Back</button>
      <button onClick={this.nextView}>Next</button>

    </div>
  );
  }
}
 
export default App;
