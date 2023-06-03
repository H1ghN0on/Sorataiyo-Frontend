import React from "react";

import { DetailsLayout } from "client/common";

const details = [
  {
    type: "Application Id",
    value: "#1488228",
  },
  {
    type: "Status",
    value: "Accepted",
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
      Jesus
    </DetailsLayout>
  );
};

export default ApplicationDetailsPage;
