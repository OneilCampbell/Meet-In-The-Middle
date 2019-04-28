import React from "react";
import "./style.css";
function InvitePage(props) {
  return (
    <div className="invite-page-container">
      <h2 className="invite-page-title">How many friends are you inviting?</h2>
      <div className="invite-page-icon-image-wrapper">
        <img />
      </div>
      <select className="invite-page-invitees">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
    </div>
  );
}
export default InvitePage;
