import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Api } from "api";
import useToast from "scripts/hooks/useToast";

import { DetailsLayout } from "client/common";
import ResultsDetails from "./ResultsDetails";

import "./ResultsDetailsPage.scss";

type Detail = {
  type: string;
  value: any;
};

type Results = {
  id: number;
  date: string;
  data: Detail[];
};

const resultsDetails = [
  {
    id: 1,
    date: "14-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 2,
    date: "15-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 3,
    date: "13-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
  {
    id: 4,
    date: "11-05-2023",
    data: [
      {
        type: "x",
        value: 36.234235,
      },
      {
        type: "y",
        value: 128.324235,
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
      {
        type: "LSTR",
        value: "Remember our promise",
      },
    ],
  },
];

const ResultsDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });

  const [headerDetails, setHeaderDetails] = React.useState<Detail[]>([]);
  const [mainDetails, setMainDetails] = React.useState<Results[]>([]);
  const [name, setName] = React.useState("");

  //Model

  const fillHeaderDetail = (property: string, value: string): Detail => {
    switch (property) {
      case "id": {
        return {
          type: "Results Id",
          value,
        };
      }
      case "startTimestamp": {
        const date = new Date(value);
        return {
          type: "Started",
          value: date.toLocaleString(),
        };
      }
      case "endTimestamp": {
        const date = new Date(value);
        return {
          type: "Finished",
          value: date.toLocaleString(),
        };
      }
      case "applicationId": {
        return {
          type: "Application source",
          value: <Link to={`/application/${value}`}>Link</Link>,
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
      case "direction_cos_orientation1": {
        return {
          type: "Direction Cos Orientation 1",
          value,
        };
      }
      case "direction_cos_orientation2": {
        return {
          type: "Direction Cos Orientation 2",
          value,
        };
      }
      case "direction_cos_orientation3": {
        return {
          type: "Direction Cos Orientation 3",
          value,
        };
      }

      case "center_latitude": {
        return {
          type: "Center latitude",
          value,
        };
      }
      case "center_longitude": {
        return {
          type: "Center longitude",
          value,
        };
      }
      case "data": {
        return {
          type: "Data",
          value,
        };
      }
      case "control_info": {
        return {
          type: "Control info",
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

  const getSession = async () => {
    const data = await Api().getSessionResults({ id: +params.id! });
    if (!data || !data.status) {
      notify();
      return navigate("/catalogs");
    }
    setName(data.name);
    const localHeaderDetails: Detail[] = [];
    for (const property in data.session) {
      const detail = fillHeaderDetail(property, (data.session as any)[property]);
      if (detail.type !== "Unknown") {
        localHeaderDetails.push(detail);
      }
    }

    const localMainDetails = data.session.RecordsResults.map((result: any, index: number) => {
      let updatedResult: Results = {
        id: index,
        date: new Date(result.createdAt).toLocaleString(),
        data: [],
      };
      for (const property in result) {
        const detail = fillMainDetail(property, (result as any)[property]);
        if (detail.type !== "Unknown") {
          updatedResult.data.push(detail);
        }
      }
      return updatedResult;
    });

    setHeaderDetails(localHeaderDetails);
    setMainDetails(localMainDetails);
  };

  React.useEffect(() => {
    getSession();
  }, []);
  return (
    <DetailsLayout onDelete={() => {}} details={headerDetails} name={name}>
      <ResultsDetails details={mainDetails} />
      <ToastContainer />
    </DetailsLayout>
  );
};

export default ResultsDetailsPage;
