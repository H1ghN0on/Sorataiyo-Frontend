import React from "react";

import { Button } from "client/common";
import NavbarSettings from "./NavbarSettings";
import { ReactComponent as Logo } from "client/shared/icons/sorataiyo-logo.svg";

import "./Navbar.scss";

interface INavbarProps {
  isAuthed: boolean;
}

const Navbar: React.FC<INavbarProps> = ({ isAuthed }) => {
  return isAuthed ? <NavbarAuthed /> : <NavbarDefault />;
};

const NavbarAuthed = () => {
  const [isSettingsActive, setSettingsActive] = React.useState(false);

  const handleSettingsClick = () => {
    setSettingsActive(!isSettingsActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo" href="#">
          <Logo />
        </a>

        <div className="tools">
          <Button className="navbar-settings-btn" onClick={handleSettingsClick}>
            Settings
          </Button>

          <NavbarSettings
            name="Arianne Yeong"
            email="aryeo512@penrose.sg"
            active={isSettingsActive}
          />
        </div>
      </div>
    </nav>
  );
};

const NavbarDefault = () => {
  const handleButtonClick = () => {};

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo" href="#">
          <Logo />
        </a>
        <div className="navigation">
          <a className="navigation-item" href="#">
            About
          </a>
          <a className="navigation-item" href="#">
            Pricing
          </a>
        </div>
        <div className="tools">
          <Button className="navbar-login-btn" inverse onClick={handleButtonClick}>
            Login
          </Button>
          <Button className="navbar-register-btn" onClick={handleButtonClick}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
