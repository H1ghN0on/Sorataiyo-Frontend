import {
  ApplicationCard,
  ProfileLayout,
  ResultCard,
  CatalogsHeader,
  EmptyList,
} from "client/common";
import React from "react";

const AdminCatalogsPage = () => {
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
          admin
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={isApplicationsActive}
          onCatalogTypeChange={handleApplicationsClick}
        />
        <div className="catalogs-content">
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ApplicationCard
            admin
            date="21/01/14"
            status="rejected"
            title="Fly me to the moon"
            id={1488228}
          />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
          <ResultCard date="21/01/14" title="Fly me to the moon" id={1488228} />
        </div>
        {/* <div className="catalogs-empty">
            <EmptyList title="Time to create new application!" />
          </div> */}
      </div>
    </ProfileLayout>
  );
};

export default AdminCatalogsPage;
