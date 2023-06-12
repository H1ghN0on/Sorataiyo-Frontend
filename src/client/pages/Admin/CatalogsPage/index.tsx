import { ApplicationCard, ProfileLayout, CatalogsHeader, EmptyList } from "client/common";
import { useTranslation } from "react-i18next";
import { ICatalogsFilter } from "client/pages/Main/CatalogsPage/components/Filters";
import React from "react";
import { Api } from "api";
import useToast from "scripts/hooks/useToast";

type ApplicationType = {
  id: number;
  date: string;
  status: "pending" | "completed" | "accepted" | "rejected";
  name: string;
};

const AdminCatalogsPage = () => {
  const { t } = useTranslation("catalogs");
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });

  const [searchValue, setSearchValue] = React.useState("");

  const [filteredCards, setFilteredCards] = React.useState<ApplicationType[]>([]);
  const [applications, setApplications] = React.useState<ApplicationType[]>([]);
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
  }, [filters, searchValue]);

  //Model

  const getApplications = async () => {
    const data = await Api().getAdminApplications();
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
          admin
          searchValue={searchValue}
          onSearchValueChange={handleSearchChange}
          isApplications={true}
          onCatalogTypeChange={() => {}}
          onFiltersChange={handleFiltersUpdate}
        />
        <div className="catalogs-content">
          {applications.length !== 0 &&
            (filteredCards as ApplicationType[]).map((application) => (
              <ApplicationCard
                admin
                key={application.id}
                date={application.date}
                status={application.status as "pending" | "completed" | "accepted" | "rejected"}
                title={application.name}
                id={application.id}
              />
            ))}
        </div>
        {filteredCards.length === 0 &&
          (applications.length === 0 ? (
            <div className="catalogs-empty">
              <EmptyList title={t("applications-ns.empty-list.admin-empty")} />
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

export default AdminCatalogsPage;
