import React from "react";
import { ProfileLayout, Card } from "client/common";

import "./CatalogsPage.scss";
import CatalogsHeader from "./components/CatalogsHeader";

const ApplicationsPage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
  };

  return (
    <ProfileLayout>
      <div className="catalogs">
        <CatalogsHeader
          onAddButtonClick={() => {}}
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
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
