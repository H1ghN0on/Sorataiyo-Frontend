import React from "react";
import { useTranslation } from "react-i18next";

import { CheckboxList, Modal, Select } from "client/common";
import { IOptionProps } from "client/common/Inputs/Select";
import useWindowDimensions from "scripts/hooks/useWindowDimensions";

import "./Filters.scss";

export interface ICatalogsFilter {
  accepted: boolean;
  rejected: boolean;
  pending: boolean;
  completed: boolean;
  ascending: boolean;
  byField: "date" | "id" | "name";
}
interface IFiltersProps {
  isOpened: boolean;
  onClose: () => void;
  onChange: (type: string, val: "date" | "id" | "name" | boolean) => void;
}

enum CardFilterByStatus {
  Accepted = "accepted",
  Rejected = "rejected",
  Pending = "pending",
  Completed = "completed",
}

enum CardSortFrom {
  Ascending = "ascending",
  Descending = "descending",
}

enum CardSortBy {
  Date = "date",
  Id = "id",
  Name = "name",
}

const Filters: React.FC<IFiltersProps> = ({ isOpened, onClose, onChange }) => {
  const { t } = useTranslation(["filters", "catalogs"]);
  const windowDimensions = useWindowDimensions();
  const [statusFilters, setStatusFilters] = React.useState([
    {
      label: t("applications-ns.accepted", { ns: "catalogs" }),
      value: CardFilterByStatus.Accepted,
      checked: false,
    },
    {
      label: t("applications-ns.rejected", { ns: "catalogs" }),
      value: CardFilterByStatus.Rejected,
      checked: false,
    },
    {
      label: t("applications-ns.pending", { ns: "catalogs" }),
      value: CardFilterByStatus.Pending,
      checked: false,
    },
    {
      label: t("applications-ns.completed", { ns: "catalogs" }),
      value: CardFilterByStatus.Completed,
      checked: false,
    },
  ]); //redux

  const [sortFrom, setSortFrom] = React.useState([
    {
      label: t("ascending"),
      value: CardSortFrom.Ascending,
      checked: true,
    },
    {
      label: t("descending"),
      value: CardSortFrom.Descending,
      checked: false,
    },
  ]);

  const [sortBy, setSortBy] = React.useState<IOptionProps[]>([
    {
      label: t("date"),
      value: CardSortBy.Date,
    },
    {
      label: t("id"),
      value: CardSortBy.Id,
    },
    {
      label: t("name"),
      value: CardSortBy.Name,
    },
  ]);

  const [activeSortBy, setActiveSortBy] = React.useState<IOptionProps>(sortBy[0]);

  const handleSortByChange = (option: IOptionProps) => {
    setActiveSortBy(option);
    onChange("byField", option.value as "date" | "name" | "id");
  };

  const handleStatusFiltersChange = (value: string, checked: boolean) => {
    const id = statusFilters.findIndex((obj) => obj.value === value);
    if (id !== -1) {
      const copyData = statusFilters.slice(0);
      copyData[id].checked = checked;
      setStatusFilters(copyData);
    }
    onChange(value, checked);
  };

  const handleSortFromChange = (value: string, checked: boolean) => {
    setSortFrom(
      sortFrom.map((item) => {
        item.checked = item.value === value;
        return item;
      })
    );
    const id = sortFrom.findIndex((obj) => obj.value === value);
    if (id !== -1) {
      const copySortFrom = sortFrom.slice(0);
      copySortFrom[id].checked = checked;
      setSortFrom(copySortFrom);
    }
    onChange("ascending", value === "ascending");
  };

  return (
    <Modal className="filters-modal" title={t("filters")} opened={isOpened} onClose={onClose}>
      <Select
        className="filters-modal-item filters-modal-sort-by"
        label={t("sort-by")!}
        active={activeSortBy}
        options={sortBy}
        onChange={handleSortByChange}
      />
      <CheckboxList
        className="filters-modal-item"
        radio
        label={t("sort-from")!}
        values={sortFrom}
        onChange={handleSortFromChange}
        column={windowDimensions.width <= 600}
      />
      <CheckboxList
        className="filters-modal-item"
        label={t("status-filter")}
        values={statusFilters}
        onChange={handleStatusFiltersChange}
        column={windowDimensions.width <= 600}
      />
    </Modal>
  );
};

export default Filters;
