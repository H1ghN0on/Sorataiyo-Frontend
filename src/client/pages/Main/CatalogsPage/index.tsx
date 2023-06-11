import React from "react";
import {
  ProfileLayout,
  ApplicationCard,
  ResultCard,
  CatalogsHeader,
  EmptyList,
} from "client/common";
import useToast from "scripts/hooks/useToast";
import { useTranslation } from "react-i18next";
import "./CatalogsPage.scss";
import { ICatalogsFilter } from "./components/Filters";
import { Api } from "api";

type ApplicationType = {
  id: number;
  date: string;
  status: "pending" | "completed" | "accepted" | "rejected";
  name: string;
};

type ResultsType = {
  id: number;
  date: string;
  name: string;
};

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
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });
  const { t } = useTranslation("catalogs");
  const [applications, setApplications] = React.useState<ApplicationType[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isApplicationsActive, setApplicationsActive] = React.useState(true);

  const [filteredCards, setFilteredCards] = React.useState<ApplicationType[] | ResultsType[]>([]);

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

  //Model

  const getApplications = async () => {
    const data = await Api().getApplications();
    if (!data || !data.status) {
      notify();
      setFilteredCards([]);
      return;
    }

    const applications: ApplicationType[] = data.applications.map((appl) => {
      const date = new Date(appl.createdAt);
      return {
        id: appl.id,
        date: date.toLocaleDateString("ru-RU"),
        status: appl.status as "pending" | "completed" | "accepted" | "rejected",
        name: appl.name,
      };
    });
    setApplications(applications);
    setFilteredCards(applications);
  };

  React.useEffect(() => {
    getApplications();
  }, []);

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
                  status={application.status as "pending" | "completed" | "accepted" | "rejected"}
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
      <ToastContainer />
    </ProfileLayout>
  );
};

export default ApplicationsPage;
