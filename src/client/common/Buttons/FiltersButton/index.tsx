import React from "react";
import clsx from "clsx";

import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";

import "./FiltersButton.scss";

interface IFilterButtonProps {
  onOpen: () => void;
  children: React.ReactNode;
  className?: string;
}

const FilterButton: React.FC<IFilterButtonProps> = ({ onOpen, children, className }) => {
  return (
    <>
      <div className={clsx(className, "filter-button")} onClick={onOpen}>
        <div className="filter-button-text">Filters</div>
        <FiltersIcon className="filter-button-icon" />
      </div>
      {children}
    </>
  );
};

export default FilterButton;
