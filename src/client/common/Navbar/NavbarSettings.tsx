import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ReactComponent as BritishFlagIcon } from "client/shared/icons/uk.svg";
import { Button } from "client/common";

import "./NavbarSettings.scss";

interface INavbarSettingsProps {
  name: string;
  email: string;
  active: boolean;
}

const NavbarSettings: React.FC<INavbarSettingsProps> = ({ name, email, active }) => {
  const { t } = useTranslation("navbar");
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
          <div className="navbar-settings-language-text">{t("lang-change")}</div>
        </div>
        <div className="navbar-settings-list">
          <div className="navbar-settings-list-item">
            <Link to="/catalogs">{t("dashboard")}</Link>
          </div>
          <div className="navbar-settings-list-item">
            <Link to="#">{t("profile-settings")}</Link>
          </div>
          <div className="navbar-settings-list-item">
            <Link to="#">{t("home-page")}</Link>
          </div>
          <Button
            inverse
            className="navbar-settings-list-item navbar-settings-list-item-logout-btn"
            onClick={handleLogoutButtonClick}
          >
            {t("logout")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSettings;
