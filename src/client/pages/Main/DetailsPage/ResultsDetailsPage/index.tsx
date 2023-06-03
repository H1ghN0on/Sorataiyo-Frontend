import React from "react";
import clsx from "clsx";

import { IconButton, DetailsLayout, FiltersButton, Input } from "client/common";

import { ReactComponent as PrintIcon } from "client/shared/icons/print.svg";
import { ReactComponent as FlipIcon } from "client/shared/icons/arrow-down.svg";

import "./ResultsDetailsPage.scss";
import ResultsFilters from "./ResultsFilters";

const details = [
  {
    type: "Result Id",
    value: "#1488228",
  },
  {
    type: "Received",
    value: "24/09/1969",
  },
  {
    type: "Application source",
    value: "Link",
  },
];

const ResultsDetailsPage = () => {
  const [searchValues, setSearchValues] = React.useState({
    x: "",
    y: "",
  });

  const handleValueChange = (type: "x" | "y", val: string) => {
    console.log("lol");
    setSearchValues({ ...searchValues, [type]: val });
  };

  const [isFiltersModalActive, setFiltersModalActive] = React.useState(false);

  const handleDetailsItemClick = () => {};

  const [isActive, setActive] = React.useState(false);

  const handleItemClick = () => {
    setActive(!isActive);
  };

  return (
    <DetailsLayout inspection={"Wow"} details={details} name="Fly me to the moon" isEditable>
      <div className="results-details">
        <div className="results-details-header">
          <div className="results-title">Results</div>
          <div className="results-tools">
            <Input
              className="results-search results-tool"
              value={searchValues.x}
              onChange={(val: string) => handleValueChange("x", val)}
              name="search-for-x"
              placeholder="X"
            />
            <Input
              className="results-search results-tool"
              value={searchValues.y}
              onChange={(val: string) => handleValueChange("y", val)}
              name="search-for-y"
              placeholder="Y"
            />
            <FiltersButton className="results-tool" onOpen={setFiltersModalActive.bind(this, true)}>
              <ResultsFilters
                isOpened={isFiltersModalActive}
                onClose={setFiltersModalActive.bind(this, false)}
              />
            </FiltersButton>
          </div>
        </div>
        <div className="results-details-list">
          <div className="results-details-list-item" onClick={handleItemClick}>
            <div className="results-details-list-item-id">#1</div>
            <div className="results-details-list-item-brief">
              <div className="results-details-list-item-brief-item date">29.07.2003 14:53:54</div>
            </div>
            <div className="results-details-list-item-tools">
              <IconButton
                className="results-details-list-item-print-btn"
                inverse
                icon={PrintIcon}
                onClick={handleDetailsItemClick}
              >
                Print
              </IconButton>
              <FlipIcon
                className={clsx("results-details-list-item-btn", {
                  rotated: false,
                })}
              />
            </div>
          </div>
          <div
            className={clsx("results-details-list-item-advanced", {
              hidden: true,
            })}
          >
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
          </div>
          <div className="results-details-list-item">
            <div className="results-details-list-item-id">#1</div>
            <div className="results-details-list-item-brief">
              <div className="results-details-list-item-brief-item date">29.07.2003 14:53:54</div>
            </div>
            <div className="results-details-list-item-tools">
              <IconButton
                className="results-details-list-item-print-btn"
                inverse
                icon={PrintIcon}
                onClick={handleDetailsItemClick}
              >
                Print
              </IconButton>
              <FlipIcon className="results-details-list-item-btn" />
            </div>
          </div>
          <div
            className={clsx("results-details-list-item-advanced", {
              hidden: !isActive,
            })}
          >
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
            <div className="results-details-list-item-advanced-item">
              <span className="results-details-list-item-advanced-type-bold">Cigarette:</span>
              Wife
            </div>
          </div>
          <div className="results-details-list-item">
            <div className="results-details-list-item-id">#1</div>
            <div className="results-details-list-item-brief">
              <div className="results-details-list-item-brief-item date">29.07.2003 14:53:54</div>
            </div>
            <div className="results-details-list-item-tools">
              <IconButton
                className="results-details-list-item-print-btn"
                inverse
                icon={PrintIcon}
                onClick={handleDetailsItemClick}
              >
                Print
              </IconButton>
              <FlipIcon className="results-details-list-item-btn" />
            </div>
          </div>
        </div>
      </div>
    </DetailsLayout>
  );
};

export default ResultsDetailsPage;
