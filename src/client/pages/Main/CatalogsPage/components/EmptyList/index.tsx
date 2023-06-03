import React from "react";

import "./EmptyList.scss";

interface IEmptyListProps {
  title: string;
}

const EmptyList: React.FC<IEmptyListProps> = ({ title }) => {
  return (
    <div className="catalogs-empty-list">
      <div className="catalogs-empty-list-kanji">零</div>
      <div className="catalogs-empty-list-reason">{title}</div>
    </div>
  );
};

export default EmptyList;
