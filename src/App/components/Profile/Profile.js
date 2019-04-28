import React from 'react'

import '../../App.css'

const ProfilePage = () => {
  return (
    <div>
      <h1 className="card-title">Profile Page</h1>
      <h2>Meet your friends 
    </h2>
    <h2>halfway
    </h2>

    <p>By location & taste
    </p>

    <header align="center" class = "prompts">Make a new plan!
    </header>

    <header class = "buttons">
      <button type="submit" style="border: 0; background: transparent">
          <img src="https://i.imgur.com/SxkYWmd.png" width="60" height="60" alt="submit" />
      </button>

    </header>

    <header align="center" class = "prompts">Check your RVSP's!
    </header>

    <header class = "buttons">
      <button type="submit" style="border: 0; background: transparent">
          <img src="https://i.imgur.com/06Y4cvb.png" width="60" height="60" alt="submit" />
      </button>
    </header>
    </div>
   );
}
 
export default ProfilePage;