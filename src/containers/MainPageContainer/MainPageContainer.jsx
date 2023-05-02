import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageComponent from "../../components/MainPageComponent/MainPageComponent";
import { hoveredUser, unHoveredUser } from "../../redux/UserSlice/UserSlice";

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  const handleHoverMouseOnUser = (user) => {
    dispatch(hoveredUser(user));
  };

  const handleHoverOutUser = () => {
    dispatch(unHoveredUser());
  };
  console.log(users);
  return (
    <MainPageComponent
      users={users}
      handleHoverMouseOnUser={handleHoverMouseOnUser}
      handleHoverOutUser={handleHoverOutUser}
    />
  );
};

export default MainPageContainer;
