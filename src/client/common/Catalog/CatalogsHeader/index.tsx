import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, IconInput, IconButton, FiltersButton } from "client/common";

import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";
import { ReactComponent as AddIcon } from "client/shared/icons/plus-icon.svg";
import { ReactComponent as BurgerIcon } from "client/shared/icons/burger.svg";

import Filters, { ICatalogsFilter } from "client/pages/Main/CatalogsPage/components/Filters";

import "./CatalogsHeader.scss";

interface ICatalogsHeaderProps {
  onSearchValueChange: (val: string) => void;
  searchValue: string;
  isApplications: boolean;
  onCatalogTypeChange: (val: boolean) => void;
  admin?: boolean;
  onFiltersChange: (type: string, val: boolean | string) => void;
}

const CatalogsHeader: React.FC<ICatalogsHeaderProps> = ({
  admin,
  onSearchValueChange,
  searchValue,
  isApplications,
  onCatalogTypeChange,
  onFiltersChange,
}) => {
  const { t } = useTranslation("catalogs");
  const [isMobileHeaderActive, setMobileHeaderActive] = React.useState(false);

  const [isFiltersModalActive, setFiltersModalActive] = React.useState(false);

  const handleBurgerClick = () => {
    setMobileHeaderActive(!isMobileHeaderActive);
  };
  return (
    <div
      className={clsx("catalogs-header", {
        admin: admin,
      })}
    >
      <div className="catalogs-header-main">
        {!admin && (
          <IconButton
            icon={AddIcon}
            inverse
            onClick={() => {}}
            link="/form"
            className="catalogs-add-application-btn"
          >
            {t("add-new")}
          </IconButton>
        )}

        {!admin && (
          <div className="catalogs-list">
            <Button
              onClick={onCatalogTypeChange.bind(this, true)}
              className="catalogs-list-item"
              inverse={isApplications}
            >
              {t("applications")}
            </Button>
            <Button
              onClick={onCatalogTypeChange.bind(this, false)}
              className="catalogs-list-item"
              inverse={!isApplications}
            >
              {t("results")}
            </Button>
          </div>
        )}
        <div className="catalogs-tools">
          <div className="catalogs-search">
            <IconInput
              className="catalogs-search-input"
              icon={FiltersIcon}
              value={searchValue}
              onChange={onSearchValueChange}
              name="search"
            />
          </div>
          <FiltersButton onOpen={setFiltersModalActive.bind(this, true)}>
            <Filters
              onChange={onFiltersChange}
              isOpened={isFiltersModalActive}
              onClose={setFiltersModalActive.bind(this, false)}
            />
          </FiltersButton>
        </div>
        <div className="burger-menu-btn">
          <IconButton
            icon={BurgerIcon}
            inverse
            className="burger-menu-icon"
            onClick={handleBurgerClick}
          >
            Settings
          </IconButton>
        </div>
      </div>

      {!admin && (
        <div
          className={clsx("catalogs-header-mobile", {
            "catalogs-header-mobile-hidden": isMobileHeaderActive,
          })}
        >
          <div
            className="catalogs-header-mobile-item"
            onClick={setFiltersModalActive.bind(this, true)}
          >
            Filters
          </div>
          <div className="catalogs-header-mobile-item">
            <Link to="/form">Add new application</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogsHeader;
