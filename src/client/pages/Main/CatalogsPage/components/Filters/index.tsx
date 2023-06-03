import React from "react";

import { Button, CheckboxList, Modal, Select } from "client/common";
import IOptionType, { IOptionProps } from "client/common/Inputs/Select";
import useWindowDimensions from "scripts/hooks/useWindowDimensions";

import "./Filters.scss";

interface IFiltersProps {
  isOpened: boolean;
  onClose: () => void;
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

const Filters: React.FC<IFiltersProps> = ({ isOpened, onClose }) => {
  const windowDimensions = useWindowDimensions();
  const [statusFilters, setStatusFilters] = React.useState([
    {
      label: "Accepeted",
      value: CardFilterByStatus.Accepted,
      checked: false,
    },
    {
      label: "Rejected",
      value: CardFilterByStatus.Rejected,
      checked: false,
    },
    {
      label: "Pending",
      value: CardFilterByStatus.Pending,
      checked: false,
    },
    {
      label: "Completed",
      value: CardFilterByStatus.Completed,
      checked: false,
    },
  ]); //redux

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
      label: "Application Id",
      value: CardSortBy.Id,
    },
    {
      label: "Name",
      value: CardSortBy.Name,
    },
  ]);

  const [activeSortBy, setActiveSortBy] = React.useState<IOptionProps>(sortBy[0]);

  const handleSortByChange = (option: IOptionProps) => {
    setActiveSortBy(option);
  };

  const handleStatusFiltersChange = (value: string, checked: boolean) => {
    const id = statusFilters.findIndex((obj) => obj.value === value);
    if (id !== -1) {
      const copyData = statusFilters.slice(0);
      copyData[id].checked = checked;
      setStatusFilters(copyData);
    }
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
  };

  const handleSubmitButtonClick = () => {
    onClose();
  };

  return (
    <Modal className="filters-modal" title="Filters" opened={isOpened} onClose={onClose}>
      <CheckboxList
        className="filters-modal-item"
        label="Status filter"
        values={statusFilters}
        onChange={handleStatusFiltersChange}
        column={windowDimensions.width <= 600}
      />
      <CheckboxList
        className="filters-modal-item"
        radio
        label="Sort from"
        values={sortFrom}
        onChange={handleSortFromChange}
        column={windowDimensions.width <= 600}
      />
      <Select
        className="filters-modal-item filters-modal-sort-by"
        label="Sort by"
        active={activeSortBy}
        options={sortBy}
        onChange={handleSortByChange}
      />
      <Button
        inverse
        className="filters-modal-item filters-modal-submit-btn"
        onClick={handleSubmitButtonClick}
      >
        Submit
      </Button>
    </Modal>
  );
};

export default Filters;
