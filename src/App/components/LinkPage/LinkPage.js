import React from 'react';
import './style.css'
import '../../App.css'


const LinkPage = () => {
  return ( 
    <div className = "Invite-Div">
      <h1 className = "Invite-Header"> Ashley has invited you to her event
        <i>Friday Night Lights!</i>
      </h1>

    <p className = "Invite-Subheader">Fill out your location and preferences to weigh in on the party plans.</p>

    <input className = "Invite-Input" type = "text" name = "Enter your shoulders" placeholder="Enter your name"/>

    <input className = "Invite-Input" type = "text" name = "Enter new address" placeholder="Enter new address"/>

    <button className = "Invite-Next" type="button">Next</button>
  </div>
  );
}

export default LinkPage;