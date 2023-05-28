import React from "react";
import clsx from "clsx";

import { ReactComponent as BritishFlagIcon } from "client/shared/icons/uk.svg";
import { Button } from "client/common";

import "./NavbarSettings.scss";

interface INavbarSettingsProps {
  name: string;
  email: string;
  active: boolean;
}

const NavbarSettings: React.FC<INavbarSettingsProps> = ({ name, email, active }) => {
  const handleLogoutButtonClick = () => {};

  return (
    <div
      className={clsx("navbar-settings", {
        "navbar-settings-hidden": !active,
      })}
    >
      <div className="navbar-settings-name">
        {name} | {email}
      </div>
      <div className="navbar-settings-tools">
        <div className="navbar-settings-language">
          <BritishFlagIcon />
          <div className="navbar-settings-language-text">Click to change</div>
        </div>
        <div className="navbar-settings-list">
          <div className="navbar-settings-list-item">Dashboard</div>
          <div className="navbar-settings-list-item">Profile Settings</div>
          <div className="navbar-settings-list-item">Home page</div>
          <Button
            inverse
            className="navbar-settings-list-item navbar-settings-list-item-logout-btn"
            onClick={handleLogoutButtonClick}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSettings;
