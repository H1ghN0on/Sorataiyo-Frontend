import React from "react";
import {
  ProfileLayout,
  ApplicationCard,
  ResultCard,
  CatalogsHeader,
  EmptyList,
} from "client/common";
import { useTranslation } from "react-i18next";
import "./CatalogsPage.scss";
import { StatusType } from "client/common/Catalog/ApplicationCard";
import { ICatalogsFilter } from "./components/Filters";
import { Api } from "api";

type ApplicationType = {
  id: number;
  date: string;
  status: StatusType;
  name: string;
};

type ResultsType = {
  id: number;
  date: string;
  name: string;
};

const applications: ApplicationType[] = [
  {
    id: 0,
    date: "21/01/14",
    status: "rejected",
    name: "Fly me to the moon",
  },
  {
    id: 1,
    date: "21/02/16",
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
    date: "20/02/16",
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

const results: ResultsType[] = [
  {
    id: 0,
    date: "21/01/14",
    name: "Fly me to the moon",
  },
  {
    id: 1,
    date: "22/02/16",
    name: "And let me play among the stars",
  },
  {
    id: 2,
    date: "21/01/14",
    name: "Fly me to the moon",
  },
  {
    id: 3,
    date: "22/02/16",
    name: "And let me play among the stars",
  },
  {
    id: 4,
    date: "21/01/14",
    name: "Fly me to the moon",
  },
  {
    id: 5,
    date: "22/02/16",
    name: "And let me play among the stars",
  },
  {
    id: 6,
    date: "21/01/14",
    name: "Fly me to the moon",
  },
  {
    id: 7,
    date: "22/02/16",
    name: "And let me play among the stars",
  },
];

const ApplicationsPage = () => {
  const { t } = useTranslation("catalogs");

  const [searchValue, setSearchValue] = React.useState("");
  const [isApplicationsActive, setApplicationsActive] = React.useState(true);

  const [filteredCards, setFilteredCards] = React.useState(
    isApplicationsActive ? applications : results
  );

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
    filterCards(filteredCards, val);
  };

  const filterCards = (cards: any[], value: string) => {
    let filtered = isApplicationsActive ? applications : results;
    filtered = filtered.filter((card) => {
      if (value && !card.id.toString().includes(value)) return false;
      if (isApplicationsActive) {
        if (!filters.accepted && !filters.pending && !filters.completed && !filters.rejected)
          return true;
        if (filters.accepted && (card as ApplicationType).status === "accepted") return true;
        if (filters.pending && (card as ApplicationType).status === "pending") return true;
        if (filters.completed && (card as ApplicationType).status === "completed") return true;
        if (filters.rejected && (card as ApplicationType).status === "rejected") return true;
        return false;
      }
      return true;
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

  const handleApplicationsClick = (val: boolean) => {
    setApplicationsActive(val);
    filterCards(val ? applications : results, searchValue);
  };

  const handleFiltersUpdate = (type: string, val: boolean | string) => {
    setFilters({ ...filters, [type]: val });
  };

  React.useEffect(() => {
    filterCards(filteredCards, searchValue);
  }, [filters, isApplicationsActive]);

  return (
    <ProfileLayout>
      <div className="catalogs">
        <CatalogsHeader
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={isApplicationsActive}
          onCatalogTypeChange={handleApplicationsClick}
          onFiltersChange={handleFiltersUpdate}
        />
        <div className="catalogs-content">
          {isApplicationsActive
            ? applications.length !== 0 &&
              (filteredCards as ApplicationType[]).map((application) => (
                <ApplicationCard
                  key={application.id}
                  date={application.date}
                  status={application.status as StatusType}
                  title={application.name}
                  id={application.id}
                />
              ))
            : results.length !== 0 &&
              (filteredCards as ResultsType[]).map((result) => (
                <ResultCard key={result.id} date={result.date} title={result.name} id={result.id} />
              ))}
        </div>
        {filteredCards.length === 0 &&
          (applications.length === 0 ? (
            <div className="catalogs-empty">
              <EmptyList title={t("applications-ns.empty-list.empty")} />
            </div>
          ) : (
            <div className="catalogs-empty">
              <EmptyList title={t("applications-ns.empty-list.bad-filters")} />
            </div>
          ))}
      </div>
    </ProfileLayout>
  );
};

export default ApplicationsPage;
