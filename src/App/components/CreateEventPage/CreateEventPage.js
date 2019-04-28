import React from 'react';
import './style.css'
import '../../App.css'


const CreateEventPage = () => {
  return ( 
    <div>
      <p className='card-title'>Let's get started</p>
      <form className={'create-event-form'}> 
      
        <input className = "create-event-input" type = "text" name = "name your event" placeholder="Name your event"/>
        <select className='create-event-select' name = "Choose Address" placeholder = "Choose Address">
          <option value = "" disabled selected>Choose saved address</option>
        </select>

        <input class = "create-event-input" type = "text" name = "new address" placeholder="Enter new address"/>
        </form>
    </div>
   );
}
 
export default CreateEventPage;