import React from "react";

import { BaseLayout } from "client/common";

import "./ProfileLayout.scss";

interface IProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <div className="content-container">{children}</div>
    </BaseLayout>
  );
};

export default ProfileLayout;
