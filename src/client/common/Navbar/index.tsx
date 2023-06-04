import React from "react";
import { Link } from "react-router-dom";

import { Button } from "client/common";
import { ReactComponent as Logo } from "client/shared/icons/sorataiyo-logo.svg";
import NavbarSettings from "./NavbarSettings";

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
        <Link className="logo" to="/">
          <Logo />
        </Link>

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
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <div className="navigation">
          <Link className="navigation-item" to="#">
            About
          </Link>
          <Link className="navigation-item" to="#">
            Pricing
          </Link>
        </div>
        <div className="tools">
          <Button link="/login" className="navbar-login-btn" inverse onClick={() => {}}>
            Login
          </Button>
          <Button link="/register" className="navbar-register-btn" onClick={() => {}}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
