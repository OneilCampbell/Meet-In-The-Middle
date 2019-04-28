
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
import WaitingRoom from './components/WaitingRoom/WaitingRoom';
import ResultsPage from './components/ResultsPage/ResultsPage';
import Header from './components/Header/Header';




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
    <ResultsPage />,
    <div>End of List</div>
  ]
  backView=()=>{
    if(this.state.viewIndex > 0){
      this.setState({viewIndex: this.state.viewIndex-1})
    }
  }

  nextView=() =>{
    if(this.state.viewIndex < this.VIEWS.length-1){
      this.setState({viewIndex: this.state.viewIndex+1})
    }
  }

  render() { 
    return (
    <div>
      <Header />
      <div className="App">
      </div>
      {/* <Login/> */}
      <div className='card-container'>
        {this.VIEWS[this.state.viewIndex]}
        <div className='button-nav'>
          <button className={'nav-button'} onClick ={this.backView}>Back</button>
          <button  className={'nav-button'} onClick={this.nextView}>Next</button>
        </div>
      </div>
     
      <div className='footer'></div>
    </div>
  );
  }
}
 
export default App;
