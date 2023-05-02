import React from "react";
import "./HoverCardComponent.css";

const HoverCardComponent = ({ user }) => {
  return (
    <>
      <div className="user-card">
        <div className="user-card-image">
          <img src={user.avatar} />
        </div>
        <div className="user-card-detail">
          <div className="user-card-name-active">
            <p className="user-card-name-text">
              {user.first_name} {user.last_name}
            </p>
            <div className="user-card-active-text"></div>
          </div>
          <div>
            <p className="user-card-email-text">{user.email}</p>
          </div>
          <div>
            <p className="user-card-plan-text">Your Plan : Standard</p>
          </div>
          <div>
            <button className="user-card-active-btn">Active Users</button>
          </div>
        </div>
        <div className="user-card-progress">
          <div>
            <p className="user-card-progressbar-text">Plan Uses</p>
          </div>
          <progress
            className="user-card-progress-bar"
            value="75"
            max="100"
          ></progress>
        </div>
        <div className="user-card-ownership">
          <div className="user-card-view">
            <p className="user-card-view-number">2,450</p>
            <p className="user-card-view-text">Clicks reviewed</p>
          </div>
          <div className="user-card-hor-line"></div>
          <div className="user-card-click">
            <p className="user-card-click-number">5000</p>
            <p className="user-card-click-text">Monthly clicks</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCardComponent;
