import React, { Component } from "react";
import "./style.css";
import "../../App.css";
import PrefBox from "../PrefBox/PrefBox";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hearArray = [
    "Live Music",
    "Jazz",
    "Pop",
    "Hard Rock",
    "Classical",
    "Folk",
    "+ add your own tag"
  ];

  eatArray = [
    "American",
    "Chinese",
    "Italian",
    "French",
    "Greek",
    "Japanese",
    "Thai",
    "Burgers",
    "+ add your own tag"
  ];

  doArray = [
    "Billiards",
    "Dance",
    "Karaoke",
    "Bowling",
    "Golf",
    "+ add your own tag"
  ];

  drinkArray = [
    "Cocktails",
    "Beer",
    "Wine",
    "Coffee",
    "Bubble Tea",
    "Whiskey",
    "Ice Cream Floats",
    "+ add your own tag"
  ];

  // handlePress =(event)=>{
  //   const {selected} = (event.target)

  //   this.setState({
  //     [selected]: !selected
  //   })
  // }

  render() {
    return (
      <div className="preference-container">
        <h1 className="card-title">Choose preferences</h1>
        <h3 className="pick-subheading">pick all that apply</h3>
        <div>
        <h3 className='preference-heading'>What do you want to hear?</h3>
        <PrefBox prefList={this.hearArray} defaultSelected={false}/>
        </div>
        <div>
        <h3 className='preference-heading'>What do you want to eat?</h3>
        <PrefBox prefList={this.eatArray} defaultSelected={false}/>
        </div>
        <div>
        <h3 className='preference-heading'>What do you want to do?</h3>
        <PrefBox prefList={this.doArray} defaultSelected={false}/>
        </div>
        <div>
        <h3 className='preference-heading'>What do you want to drink?</h3>
        <PrefBox prefList={this.drinkArray} sdefaultSelected={false} />

        </div>
      </div>
    );
  }
}

export default Preferences;
