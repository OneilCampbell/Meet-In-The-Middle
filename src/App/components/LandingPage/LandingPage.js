import React from 'react'
import './style.css'
import '../../App.css'



const LandingPage = () => {
  return ( 
    <div className='container-landingpage'>
      <h1 className="card-title">Profile Page</h1>
      <h2>Meet your friends 
      </h2>
     <h2>halfway
      </h2>

    <p>By location & taste
    </p>

    <header align="center" className = "prompts">Make a new plan!</header>

    <header className = "buttons">
      <button type="submit" className='submit-landingpage'>
          <img src="https://i.imgur.com/SxkYWmd.png" width="60" height="60" alt="submit" />
      </button>

    </header>

    <header align="center" className = "prompts">Check your RVSP's!
    </header>

    <header className = "buttons">
      <button type="submit" className='submit-landingpage'>
          <img src="https://i.imgur.com/06Y4cvb.png" width="60" height="60" alt="submit" />
      </button>
    </header>
    </div>
   );
}
 
export default LandingPage;