import React from "react";
import {
  ProfileLayout,
  ApplicationCard,
  ResultCard,
  CatalogsHeader,
  EmptyList,
} from "client/common";

import "./CatalogsPage.scss";
import { StatusType } from "client/common/Catalog/ApplicationCard";

const applications = [
  {
    id: 0,
    timestamp: "21/01/14",
    status: "rejected",
    title: "Fly me to the moon",
  },
  {
    id: 1,
    timestamp: "22/02/16",
    status: "accepted",
    title: "And let me play among the stars",
  },
  {
    id: 2,
    timestamp: "21/01/14",
    status: "rejected",
    title: "Fly me to the moon",
  },
  {
    id: 3,
    timestamp: "22/02/16",
    status: "accepted",
    title: "And let me play among the stars",
  },
  {
    id: 4,
    timestamp: "21/01/14",
    status: "rejected",
    title: "Fly me to the moon",
  },
  {
    id: 5,
    timestamp: "22/02/16",
    status: "accepted",
    title: "And let me play among the stars",
  },
  {
    id: 6,
    timestamp: "21/01/14",
    status: "rejected",
    title: "Fly me to the moon",
  },
  {
    id: 7,
    timestamp: "22/02/16",
    status: "accepted",
    title: "And let me play among the stars",
  },
];

const results = [
  {
    id: 0,
    timestamp: "21/01/14",
    title: "Fly me to the moon",
  },
  {
    id: 1,
    timestamp: "22/02/16",
    title: "And let me play among the stars",
  },
  {
    id: 2,
    timestamp: "21/01/14",
    title: "Fly me to the moon",
  },
  {
    id: 3,
    timestamp: "22/02/16",
    title: "And let me play among the stars",
  },
  {
    id: 4,
    timestamp: "21/01/14",
    title: "Fly me to the moon",
  },
  {
    id: 5,
    timestamp: "22/02/16",
    title: "And let me play among the stars",
  },
  {
    id: 6,
    timestamp: "21/01/14",
    title: "Fly me to the moon",
  },
  {
    id: 7,
    timestamp: "22/02/16",
    title: "And let me play among the stars",
  },
];

const ApplicationsPage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [isApplicationsActive, setApplicationsActive] = React.useState(true);

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
  };

  const handleApplicationsClick = (val: boolean) => {
    setApplicationsActive(val);
  };

  return (
    <ProfileLayout>
      <div className="catalogs">
        <CatalogsHeader
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={isApplicationsActive}
          onCatalogTypeChange={handleApplicationsClick}
        />
        <div className="catalogs-content">
          {isApplicationsActive
            ? applications.length !== 0 &&
              applications.map((application) => (
                <ApplicationCard
                  date={application.timestamp}
                  status={application.status as StatusType}
                  title={application.title}
                  id={application.id}
                />
              ))
            : results.length !== 0 &&
              results.map((result) => (
                <ResultCard date={result.timestamp} title={result.title} id={result.id} />
              ))}
        </div>
        {isApplicationsActive && applications.length === 0 && (
          <div className="catalogs-empty">
            <EmptyList title="Time to create new application!" />
          </div>
        )}
        {!isApplicationsActive && results.length === 0 && (
          <div className="catalogs-empty">
            <EmptyList title="No results" />
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default ApplicationsPage;
