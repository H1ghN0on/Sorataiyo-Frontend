import React from "react";

import "./ResultsDetails.scss";
import ResultsDetailsHeader from "./ResultsDetailsHeader";
import ResultsDetailsListItem, { IResultDetails } from "./ResultsDetailsListItem";

interface IResultDetailsProps {
  details: IResultDetails[];
}

const ResultsDetails: React.FC<IResultDetailsProps> = ({ details }) => {
  const [searchValues, setSearchValues] = React.useState({
    x: "",
    y: "",
  });

  const handleValueChange = (type: "x" | "y", val: string) => {
    console.log("lol");
    setSearchValues({ ...searchValues, [type]: val });
  };

  return (
    <div className="results-details">
      <ResultsDetailsHeader
        /*onFiltersChange*/ searchValues={searchValues}
        onSearchChange={handleValueChange}
      />
      <div className="results-details-list">
        {details && details.map((data) => <ResultsDetailsListItem details={data} />)}
      </div>
    </div>
  );
};

export default ResultsDetails;
