import React from "react";

import {
  LoginPage,
  IntroductionRegisterPage,
  EmailConfirmationRegisterPage,
  PasswordRegisterPage,
  FinishRegisterPage,
  CatalogsPage,
  ApplicationDetailsPage,
} from "client/pages";

import {
  Navbar,
  Footer,
  BaseLayout,
  Select,
  ProfileLayout,
  CheckboxList,
  Modal,
} from "client/common";

import "./App.scss";

function App() {
  // const [data, setData] = React.useState([
  //   {
  //     label: "Hi Patrick1",
  //     value: "sorting",
  //     checked: true,
  //   },
  //   {
  //     label: "Hi Patrick2",
  //     value: "sorting2",
  //     checked: false,
  //   },
  //   {
  //     label: "Hi Patrick3",
  //     value: "sorting3",
  //     checked: false,
  //   },
  // ]);

  // const handleCheckboxChange = (value: string, checked: boolean) => {
  //   const id = data.findIndex((obj) => obj.value === value);
  //   if (id !== -1) {
  //     const copyData = data.slice(0);
  //     copyData[id].checked = checked;
  //     setData(copyData);
  //   }
  // };

  // const handleRadioChange = (value: string, checked: boolean) => {
  //   setData(
  //     data.map((item) => {
  //       item.checked = item.value === value;
  //       return item;
  //     })
  //   );
  //   const id = data.findIndex((obj) => obj.value === value);
  //   if (id !== -1) {
  //     const copyData = data.slice(0);
  //     copyData[id].checked = checked;
  //     setData(copyData);
  //   }
  // };

  // console.log(data);

  // return <CheckboxList values={data} onChange={handleRadioChange} column />;
  return <ApplicationDetailsPage />;
}

export default App;
