import { ApplicationCard, ProfileLayout, CatalogsHeader, EmptyList } from "client/common";

import { StatusType } from "client/common/Catalog/ApplicationCard";
import { ICatalogsFilter } from "client/pages/Main/CatalogsPage/components/Filters";
import React from "react";

type ApplicationType = {
  id: number;
  date: string;
  status: StatusType;
  name: string;
};

const applications = [
  {
    id: 0,
    date: "21/01/14",
    status: "rejected",
    name: "Fly me to the moon",
  },
  {
    id: 1,
    date: "22/02/16",
    status: "accepted",
    name: "And let me play among the stars",
  },
  {
    id: 2,
    date: "21/01/14",
    status: "rejected",
    name: "Fly me to the moon",
  },
  {
    id: 3,
    date: "22/02/16",
    status: "accepted",
    name: "And let me play among the stars",
  },
  {
    id: 4,
    date: "21/01/14",
    status: "rejected",
    name: "Fly me to the moon",
  },
  {
    id: 5,
    date: "22/02/16",
    status: "accepted",
    name: "And let me play among the stars",
  },
  {
    id: 6,
    date: "21/01/14",
    status: "rejected",
    name: "Fly me to the moon",
  },
  {
    id: 7,
    date: "22/02/16",
    status: "accepted",
    name: "And let me play among the stars",
  },
];

const AdminCatalogsPage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const [filteredCards, setFilteredCards] = React.useState(applications);

  const [filters, setFilters] = React.useState<ICatalogsFilter>({
    accepted: false,
    rejected: false,
    pending: false,
    completed: false,
    ascending: true,
    byField: "date",
  });

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
  };

  const filterCards = (cards: any[], value: string) => {
    let filtered = applications;
    filtered = filtered.filter((card) => {
      if (value && !card.id.toString().includes(value)) return false;
      if (!filters.accepted && !filters.pending && !filters.completed && !filters.rejected)
        return true;
      if (filters.accepted && (card as ApplicationType).status === "accepted") return true;
      if (filters.pending && (card as ApplicationType).status === "pending") return true;
      if (filters.completed && (card as ApplicationType).status === "completed") return true;
      if (filters.rejected && (card as ApplicationType).status === "rejected") return true;
      return false;
    });
    filtered = sortCards(filtered, filters.byField, filters.ascending);
    setFilteredCards(filtered);
  };

  const sortCards = (cards: any[], field: string, asc: boolean) => {
    return cards.sort((a: any, b: any) => {
      if (a[field] < b[field]) return asc ? -1 : 1;
      if (a[field] > b[field]) return asc ? 1 : -1;
      return 0;
    });
  };

  const handleFiltersUpdate = (type: string, val: boolean | string) => {
    setFilters({ ...filters, [type]: val });
  };

  React.useEffect(() => {
    filterCards(filteredCards, searchValue);
  }, [filters]);

  return (
    <ProfileLayout>
      <div className="catalogs">
        <CatalogsHeader
          admin
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={true}
          onCatalogTypeChange={() => {}}
          filters={filters}
          onFiltersChange={handleFiltersUpdate}
        />
        <div className="catalogs-content">
          {applications.length !== 0 &&
            (filteredCards as ApplicationType[]).map((application) => (
              <ApplicationCard
                admin
                key={application.id}
                date={application.date}
                status={application.status as StatusType}
                title={application.name}
                id={application.id}
              />
            ))}
        </div>
        {filteredCards.length === 0 &&
          (applications.length === 0 ? (
            <div className="catalogs-empty">
              <EmptyList title="Time to rest! No applications" />
            </div>
          ) : (
            <div className="catalogs-empty">
              <EmptyList title="Bad filters" />
            </div>
          ))}
      </div>
    </ProfileLayout>
  );
};

export default AdminCatalogsPage;
