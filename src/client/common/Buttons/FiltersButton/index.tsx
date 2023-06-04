import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { ReactComponent as FiltersIcon } from "client/shared/icons/filter.svg";

import "./FiltersButton.scss";

interface IFilterButtonProps {
  onOpen: () => void;
  children: React.ReactNode;
  className?: string;
}

const FilterButton: React.FC<IFilterButtonProps> = ({ onOpen, children, className }) => {
  const { t } = useTranslation("filters");
  return (
    <>
      <div className={clsx(className, "filter-button")} onClick={onOpen}>
        <div className="filter-button-text">{t("filters")}</div>
        <FiltersIcon className="filter-button-icon" />
      </div>
      {children}
    </>
  );
};

export default FilterButton;
