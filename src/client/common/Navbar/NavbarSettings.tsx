import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ReactComponent as BritishFlagIcon } from "client/shared/icons/uk.svg";
import { ReactComponent as RussianFlagIcon } from "client/shared/icons/russia.svg";

import { Button } from "client/common";

import "./NavbarSettings.scss";

interface INavbarSettingsProps {
  name: string;
  email: string;
  active: boolean;
}

const FlagIcon: React.FC<{ lang: "en" | "ru" | "jp" }> = ({ lang }) => {
  switch (lang) {
    case "en":
      return <BritishFlagIcon />;
    case "ru":
      return <RussianFlagIcon />;
    case "jp":
      return <BritishFlagIcon />;
  }
};

enum Languages {
  English = "en",
  Russian = "ru",
  Japanese = "en",
}

const locales = [Languages.English, Languages.Russian /*Languages.Japanese*/];

const NavbarSettings: React.FC<INavbarSettingsProps> = ({ name, email, active }) => {
  const [language, setLanguage] = React.useState(0);
  const { t, i18n } = useTranslation("navbar");
  const handleLanguageChangeButtonClick = () => {
    if (language === locales.length - 1) {
      setLanguage(0);
      i18n.changeLanguage(locales[0]);
    } else {
      setLanguage(language + 1);
      i18n.changeLanguage(locales[language + 1]);
    }
  };
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
        <div className="navbar-settings-language" onClick={handleLanguageChangeButtonClick}>
          <FlagIcon lang={locales[language]} />
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
