import React from "react";
import { useTranslation } from "react-i18next";

import { IOptionProps } from "client/common/Inputs/Select";
import { CheckboxList, Modal, Select } from "client/common";

interface IResultsFilters {
  isOpened: boolean;
  onClose: () => void;
  onChange: (type: string, val: "date" | "id" | boolean) => void;
}

enum CardSortFrom {
  Ascending = "ascending",
  Descending = "descending",
}

enum CardSortBy {
  Date = "date",
  Id = "id",
}

const ResultsFilters: React.FC<IResultsFilters> = ({ isOpened, onClose, onChange }) => {
  const { t } = useTranslation("filters");
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
  ]);

  const [activeSortBy, setActiveSortBy] = React.useState<IOptionProps>(sortBy[0]);

  const handleSortByChange = (option: IOptionProps) => {
    setActiveSortBy(option);
    onChange("byField", option.value as "date" | "id");
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

    onChange(CardSortFrom.Ascending, value === CardSortFrom.Ascending);
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
        column
      />
    </Modal>
  );
};

export default ResultsFilters;
