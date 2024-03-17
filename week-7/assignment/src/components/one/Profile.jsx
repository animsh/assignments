import React from "react";
import "./Profile.css"; // Import the CSS file here

const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <div className="topSection">
          <div className="orangeBackground"></div>
          <div className="profileImage">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
              style={{ width: "96px" }}
            />
          </div>
          <div className="userInfo">
            <b>Rita Correia</b> <span>32</span>
            <p style={{ margin: 0 }}>London</p>
          </div>
        </div>
        <div className="bottomSection">
          <div className="statContainer">
            <b>80K</b>
            <p style={{ margin: 0 }}>Followers</p>
          </div>

          <div className="statContainer">
            <b>803K</b>
            <p style={{ margin: 0 }}>Likes</p>
          </div>

          <div className="statContainer">
            <b>1.4K</b>
            <p style={{ margin: 0 }}>Photos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
