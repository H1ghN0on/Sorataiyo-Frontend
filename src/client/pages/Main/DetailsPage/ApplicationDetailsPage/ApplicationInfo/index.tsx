import React from "react";

import "./ApplicationInfo.scss";

interface IDetails {
  type: string;
  value: React.ReactNode;
}

interface IApplicationInfoProps {
  details: IDetails[];
}

const ApplicationInfo: React.FC<IApplicationInfoProps> = ({ details }) => {
  return (
    <div className="details-application-info">
      <div className="details-application-info-label">Type: Exploring location</div>
      <div className="details-application-info-content">
        {details &&
          details.map((detail, index) => (
            <div key={index} className="details-application-info-content-item">
              <span className="details-application-info-content-item-bold">{detail.type}:</span>{" "}
              {detail.value}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApplicationInfo;
