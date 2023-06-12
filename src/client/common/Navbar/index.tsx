import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { User } from "store";
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
  const { t } = useTranslation("navbar");
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
            {t("settings")}
          </Button>

          <NavbarSettings
            name={User.user.firstName + " " + User.user.lastName}
            email={User.user.email}
            active={isSettingsActive}
          />
        </div>
      </div>
    </nav>
  );
};

const NavbarDefault = () => {
  const { t } = useTranslation("navbar");
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <div className="navigation">
          <Link className="navigation-item" to="#">
            {t("about")}
          </Link>
          <Link className="navigation-item" to="#">
            {t("pricing")}
          </Link>
        </div>
        <div className="tools">
          <Button link="/login" className="navbar-login-btn" inverse onClick={() => {}}>
            {t("login")}
          </Button>
          <Button link="/register" className="navbar-register-btn" onClick={() => {}}>
            {t("sign-up")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
