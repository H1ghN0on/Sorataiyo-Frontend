import React from "react";
import clsx from "clsx";

import { Button, IconInput, IconButton, FiltersButton } from "client/common";

import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";
import { ReactComponent as AddIcon } from "client/shared/icons/plus-icon.svg";
import { ReactComponent as BurgerIcon } from "client/shared/icons/burger.svg";

import "./CatalogsHeader.scss";
import Filters from "../Filters";

interface ICatalogsHeaderProps {
  onAddButtonClick: () => void;
  onSearchValueChange: (val: string) => void;
  searchValue: string;
  isApplications: boolean;
  onCatalogTypeChange: (val: boolean) => void;
}

const CatalogsHeader: React.FC<ICatalogsHeaderProps> = ({
  onAddButtonClick,
  onSearchValueChange,
  searchValue,
  isApplications,
  onCatalogTypeChange,
}) => {
  const [isMobileHeaderActive, setMobileHeaderActive] = React.useState(false);

  const [isFiltersModalActive, setFiltersModalActive] = React.useState(false);

  const handleBurgerClick = () => {
    setMobileHeaderActive(!isMobileHeaderActive);
  };

  const handleFiltersClick = () => {
    setFiltersModalActive(!isFiltersModalActive);
  };

  return (
    <div className="catalogs-header">
      <div className="catalogs-header-main">
        <IconButton
          icon={AddIcon}
          inverse
          onClick={onAddButtonClick}
          className="catalogs-add-application-btn"
        >
          Add application
        </IconButton>

        <div className="catalogs-list">
          <Button
            onClick={onCatalogTypeChange.bind(this, true)}
            className="catalogs-list-item"
            inverse={isApplications}
          >
            Applicatons
          </Button>
          <Button
            onClick={onCatalogTypeChange.bind(this, false)}
            className="catalogs-list-item"
            inverse={!isApplications}
          >
            Results
          </Button>
        </div>
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
        <div className="catalogs-header-mobile-item">Add new application</div>
      </div>
    </div>
  );
};

export default CatalogsHeader;
