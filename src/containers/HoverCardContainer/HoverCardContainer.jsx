import React from "react";
import { useSelector } from "react-redux";
import HoverCardComponent from "../../components/HoverCardComponent/HoverCardComponent";
// import
const HoverCardContainer = () => {
  const user = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  if (status === "idle") {
    return <></>;
  }

  return (
    <>
      <HoverCardComponent user={user} />
    </>
  );
};

export default HoverCardContainer;
