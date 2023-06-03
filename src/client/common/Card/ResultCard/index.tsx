import React from "react";

import { CardLayout } from "client/common";

interface ICardProps {
  title: string;
  id: number;
  date: string;
}

const Card: React.FC<ICardProps> = ({ title, id, date }) => {
  return (
    <CardLayout title={title} id={id}>
      <div className="card-info-item">Records ID: #{id}</div>
      <div className="card-info-item">Received: {date}</div>
    </CardLayout>
  );
};

export default Card;
