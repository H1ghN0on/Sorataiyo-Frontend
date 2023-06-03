import React from "react";

import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";

import "./FiltersButton.scss";

interface IFilterButtonProps {
  onOpen: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<IFilterButtonProps> = ({ onOpen, children }) => {
  return (
    <>
      <div className="filter-button" onClick={onOpen}>
        <div className="filter-button-text">Filters</div>
        <FiltersIcon className="filter-button-icon" />
      </div>
      {children}
    </>
  );
};

export default FilterButton;
