import React from "react";
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
  const [sortFrom, setSortFrom] = React.useState([
    {
      label: "Ascending",
      value: CardSortFrom.Ascending,
      checked: true,
    },
    {
      label: "Descending",
      value: CardSortFrom.Descending,
      checked: false,
    },
  ]);

  const [sortBy, setSortBy] = React.useState<IOptionProps[]>([
    {
      label: "Date",
      value: CardSortBy.Date,
    },
    {
      label: "Id",
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
    <Modal className="filters-modal" title="Filters" opened={isOpened} onClose={onClose}>
      <Select
        className="filters-modal-item filters-modal-sort-by"
        label="Sort by"
        active={activeSortBy}
        options={sortBy}
        onChange={handleSortByChange}
      />
      <CheckboxList
        className="filters-modal-item"
        radio
        label="Sort from"
        values={sortFrom}
        onChange={handleSortFromChange}
        column
      />
    </Modal>
  );
};

export default ResultsFilters;
