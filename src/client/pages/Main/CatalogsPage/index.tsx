import React from "react";
import { ProfileLayout, Card } from "client/common";

import "./CatalogsPage.scss";
import CatalogsHeader from "./components/CatalogsHeader";

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
          onAddButtonClick={() => {}}
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={isApplicationsActive}
          onCatalogTypeChange={handleApplicationsClick}
        />
        <div className="catalogs-catalog">
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
          <Card date="21/01/14" status="rejected" title="Fly me to the moon" id={1488228} />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ApplicationsPage;
