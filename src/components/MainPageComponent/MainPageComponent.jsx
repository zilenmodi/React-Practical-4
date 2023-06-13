import React from "react";
import "./MainPageComponent.css";
import LockIcon from "../../assets/lock.svg";
import TrashIcon from "../../assets/trash.svg";
import HoverCardContainer from "../../containers/HoverCardContainer/HoverCardContainer";

const MainPageComponent = ({
  users,
  handleHoverMouseOnUser,
  handleHoverOutUser,
}) => {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <div className="users-list-area">
          <table className="users-list-tabel">
            <thead>
              <tr>
                <th className="table-heading-text table-heading-text-name">
                  Name
                </th>
                <th className="table-heading-text table-heading-text-status">
                  Status
                </th>
                <th className="table-heading-text table-heading-text-access">
                  Access
                </th>
                <th className="table-heading-text table-heading-text-icon"></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className="mb-2">
                        <div
                          className="user-details"
                          onMouseEnter={() => handleHoverMouseOnUser(user)}
                          onMouseLeave={handleHoverOutUser}
                        >
                          <div className="user-avatar">
                            <img src={user.avatar} />
                          </div>
                          <div className="user-detail">
                            <div className="user-name">
                              <p className="user-name-text">
                                {user.first_name} {user.last_name}
                              </p>
                            </div>
                            <div className="user-email">
                              <p className="user-email-text">{user.email}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="mb-2">
                        {!index ? (
                          <>
                            <p className="status-active-text">Active</p>
                          </>
                        ) : (
                          <>
                            <select className="status-dropdown">
                              <option>Inactive</option>
                              <option>Active</option>
                            </select>
                          </>
                        )}
                      </td>
                      <td className="mb-2">
                        {!index ? (
                          <>
                            <p className="access-owner-text">Owner</p>
                          </>
                        ) : (
                          <>
                            <select className="status-dropdown">
                              <option>{user.access}</option>
                            </select>
                          </>
                        )}
                      </td>
                      <td className="mb-2">
                        <div className="user-access-icon">
                          <img src={!index ? LockIcon : TrashIcon} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="user-card-area">
          <HoverCardContainer />
          <div className="side-strip"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
