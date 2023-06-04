import React from "react";

import { DetailsLayout } from "client/common";

import { Status } from "client/common/Catalog/ApplicationCard";
import ApplicationInfo from "./ApplicationInfo";

import "./ApplicationDetailsPage.scss";

const details = [
  {
    type: "Application Id",
    value: "#1488228",
  },
  {
    type: "Status",
    value: <Status className="details-status-icon" status="accepted" />,
  },
  {
    type: "Created",
    value: "24/09/1969",
  },
  {
    type: "Modified",
    value: "20/05/20",
  },
  {
    type: "Results",
    value: "Link",
  },
];

const ApplicationDetailsPage = () => {
  return (
    <DetailsLayout inspection={"Wow"} details={details} name="Fly me to the moon" isEditable>
      <ApplicationInfo details={details} />
    </DetailsLayout>
  );
};

export default ApplicationDetailsPage;
