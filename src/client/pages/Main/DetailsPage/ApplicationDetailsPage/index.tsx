import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Api } from "api";
import { DetailsLayout } from "client/common";
import { Status } from "client/common/Catalog/ApplicationCard";
import ApplicationInfo from "./ApplicationInfo";

import "./ApplicationDetailsPage.scss";
import useToast from "scripts/hooks/useToast";

type Detail = {
  type: string;
  value: any;
};

const ApplicationDetailsPage = () => {
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });

  const navigate = useNavigate();
  const [review, setReview] = React.useState("");
  const [headerDetails, setHeaderDetails] = React.useState<Detail[]>([]);
  const [mainDetails, setMainDetails] = React.useState<Detail[]>([]);
  const [isEditable, setEditable] = React.useState(false);
  const params = useParams();
  //Model

  const fillHeaderDetail = (property: string, value: string): Detail => {
    switch (property) {
      case "id": {
        return {
          type: "Application Id",
          value,
        };
      }
      case "status": {
        if (value === "rejected") {
          setEditable(true);
        }
        return {
          type: "Status",
          value: (
            <Status
              className="details-status-icon"
              status={value as "pending" | "accepted" | "completed" | "rejected"}
            />
          ),
        };
      }
      case "createdAt": {
        const date = new Date(value);
        return {
          type: "Created",
          value: date.toLocaleString(),
        };
      }
      case "updatedAt": {
        const date = new Date(value);
        return {
          type: "Modified",
          value: date.toLocaleString(),
        };
      }
      case "review": {
        setReview(value);
        return {
          type: "Unknown",
          value,
        };
      }
      default: {
        return {
          type: "Unknown",
          value,
        };
      }
    }
  };

  const fillMainDetail = (property: string, value: any): Detail => {
    switch (property) {
      case "x": {
        return {
          type: "X",
          value,
        };
      }
      case "y": {
        return {
          type: "Y",
          value,
        };
      }
      case "radius": {
        return {
          type: "Radius",
          value,
        };
      }
      case "Instrument": {
        return {
          type: "Instrument",
          value: value.name,
        };
      }
      default: {
        return {
          type: "Unknown",
          value,
        };
      }
    }
  };

  const getApplicationById = async () => {
    const data = await Api().getApplicationById({ id: +params.id! });
    console.log(data);
    if (!data || !data.status) {
      notify();
      return navigate("/catalogs");
    }
    const localHeaderDetails: Detail[] = [];
    const localMainDetails: Detail[] = [];
    for (const property in data.application) {
      const detail = fillHeaderDetail(property, (data.application as any)[property]);
      if (detail.type !== "Unknown") {
        localHeaderDetails.push(detail);
      }
    }
    for (const property in data.application) {
      const detail = fillMainDetail(property, (data.application as any)[property]);
      if (detail.type !== "Unknown") {
        localMainDetails.push(detail);
      }
    }
    setHeaderDetails(localHeaderDetails);
    setMainDetails(localMainDetails);
  };

  React.useEffect(() => {
    getApplicationById();
  }, []);

  return (
    <DetailsLayout
      inspection={review}
      details={headerDetails}
      name="Fly me to the moon"
      isEditable={isEditable}
    >
      <ApplicationInfo details={mainDetails} />
      <ToastContainer />
    </DetailsLayout>
  );
};

export default ApplicationDetailsPage;
