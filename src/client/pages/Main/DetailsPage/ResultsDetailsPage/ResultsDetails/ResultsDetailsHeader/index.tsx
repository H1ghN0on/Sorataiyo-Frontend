import React from "react";

import { FiltersButton, Input } from "client/common";

import ResultsFilters from "../ResultsFilters";

import "./ResultsDetailsHeader.scss";

interface IResultDetailsHeaderProps {
  searchValues: { x: string; y: string };
  onSearchChange: (type: "x" | "y", val: string) => void;
  onFiltersChange: (type: string, val: boolean | string) => void;
}

const ResultsDetailsHeader: React.FC<IResultDetailsHeaderProps> = ({
  searchValues,
  onSearchChange,
  onFiltersChange,
}) => {
  const [isFiltersModalActive, setFiltersModalActive] = React.useState(false);

  return (
    <div className="results-details-header">
      <div className="results-title">Results</div>
      <div className="results-tools">
        <Input
          className="results-search results-tool"
          value={searchValues.x}
          onChange={(val: string) => onSearchChange("x", val)}
          name="search-for-x"
          placeholder="X"
        />
        <Input
          className="results-search results-tool"
          value={searchValues.y}
          onChange={(val: string) => onSearchChange("y", val)}
          name="search-for-y"
          placeholder="Y"
        />
        <FiltersButton className="results-tool" onOpen={setFiltersModalActive.bind(this, true)}>
          <ResultsFilters
            onChange={onFiltersChange}
            isOpened={isFiltersModalActive}
            onClose={setFiltersModalActive.bind(this, false)}
          />
        </FiltersButton>
      </div>
    </div>
  );
};

export default ResultsDetailsHeader;
