import React from "react";
import "./HoverCardComponent.css";

const HoverCardComponent = ({ user }) => {
  return (
    <>
      <h1>{user.first_name}</h1>
    </>
  );
};

export default HoverCardComponent;
