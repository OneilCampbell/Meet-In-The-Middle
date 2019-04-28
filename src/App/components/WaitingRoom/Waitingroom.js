import React from 'react'
import "./style.css";
import "../../App.css";

const WaitingRoom = () => {
  return (
    <div className="waiting-room">
      <p className="card-title where-to-meet">Where will you meet?</p>
      <div className="waiting-room-image" />
      <p className="want-to-be-notified">Want to be notified when everyone has responded?</p>
      <input className="phone-number-text-box" type="text" placeholder="Enter your phone number" />
      <p className="send-a-text">We'll send you a text</p>
      <button className="waiting-page-submit">Submit</button>
    </div>
   );
}

export default WaitingRoom;