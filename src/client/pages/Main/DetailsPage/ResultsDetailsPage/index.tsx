import React from "react";

import { DetailsLayout } from "client/common";

import "./ResultsDetailsPage.scss";

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
  return (
    <DetailsLayout inspection={"Wow"} details={details} name="Fly me to the moon" isEditable>
      <div className="results-details">
        <div className="results-details-header">
          <div className="results-title">Results</div>
          <div className="results-tools"></div>
        </div>
      </div>
    </DetailsLayout>
  );
};

export default ResultsDetailsPage;
