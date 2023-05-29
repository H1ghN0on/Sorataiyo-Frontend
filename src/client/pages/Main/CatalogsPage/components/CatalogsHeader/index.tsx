import React from "react";

import { Button, IconInput, IconButton } from "client/common";

import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";
import { ReactComponent as AddIcon } from "client/shared/icons/plus-icon.svg";

interface ICatalogsHeaderProps {
  onAddButtonClick: () => void;
  onSearchValueChange: (val: string) => void;
  searchValue: string;
}

const CatalogsHeader: React.FC<ICatalogsHeaderProps> = ({
  onAddButtonClick,
  onSearchValueChange,
  searchValue,
}) => {
  return (
    <div className="catalogs-header">
      <IconButton
        icon={AddIcon}
        inverse
        onClick={onAddButtonClick}
        className="catalogs-add-application-btn"
      >
        Add application
      </IconButton>

      <div className="catalogs-list">
        <Button inverse onClick={() => {}} className="catalogs-list-item">
          Applicatons
        </Button>
        <Button onClick={() => {}} className="catalogs-list-item">
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
        <div className="catalogs-filter">
          <div className="catalogs-filter-text">Filters</div>
          <FiltersIcon className="catalogs-filter-icon" />
        </div>
      </div>
    </div>
  );
};

export default CatalogsHeader;
