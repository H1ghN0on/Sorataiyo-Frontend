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

  const [filters, setFilters] = React.useState({
    ascending: true,
    byField: "date",
  });

  const [filteredDetails, setFilteredDetails] = React.useState(details);

  const handleValueChange = (type: "x" | "y", val: string) => {
    setSearchValues({ ...searchValues, [type]: val });
  };

  const handleFiltersUpdate = (type: string, val: boolean | string) => {
    setFilters({ ...filters, [type]: val });
  };

  const filterDetails = () => {
    let filtered = details;
    filtered = filtered.filter((detail) => {
      if (searchValues.x) {
        const i = detail.data.findIndex((data) => data.type === "x");
        if (i === -1 || !detail.data[i].value.toString().includes(searchValues.x)) return false;
      }
      if (searchValues.y) {
        const i = detail.data.findIndex((data) => data.type === "y");
        if (i === -1 || !detail.data[i].value.toString().includes(searchValues.y)) return false;
      }
      return true;
    });
    setFilteredDetails(sortResults(filtered, filters.byField, filters.ascending));
  };

  const sortResults = (results: any[], field: string, asc: boolean) => {
    return results.sort((a: any, b: any) => {
      if (a[field] < b[field]) return asc ? -1 : 1;
      if (a[field] > b[field]) return asc ? 1 : -1;
      return 0;
    });
  };

  React.useEffect(() => {
    filterDetails();
  }, [details, filters, searchValues]);

  return (
    <div className="results-details">
      <ResultsDetailsHeader
        onFiltersChange={handleFiltersUpdate}
        searchValues={searchValues}
        onSearchChange={handleValueChange}
      />
      <div className="results-details-list">
        {filteredDetails &&
          filteredDetails.map((data) => <ResultsDetailsListItem key={data.id} details={data} />)}
      </div>
    </div>
  );
};

export default ResultsDetails;
