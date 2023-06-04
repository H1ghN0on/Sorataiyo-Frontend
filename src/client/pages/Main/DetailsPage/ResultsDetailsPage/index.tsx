import React from "react";
import { Link } from "react-router-dom";

import { DetailsLayout } from "client/common";
import ResultsDetails from "./ResultsDetails";

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
    value: <Link to="/application/228">Link</Link>,
  },
];

const resultsDetails = [
  {
    id: 1,
    timestamp: "14-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 2,
    timestamp: "15-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 3,
    timestamp: "16-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 4,
    timestamp: "18-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
];

const ResultsDetailsPage = () => {
  return (
    <DetailsLayout
      inspection={"Wow, that's absolutely incredible"}
      details={details}
      name="Fly me to the moon"
      isEditable
    >
      <ResultsDetails details={resultsDetails} />
    </DetailsLayout>
  );
};

export default ResultsDetailsPage;
