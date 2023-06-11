import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import {
  LoginPage,
  RegisterPage,
  CatalogsPage,
  ApplicationDetailsPage,
  ResultsDetailsPage,
  FormPage,
  AdminCatalogsPage,
  AdminFormPage,
} from "client/pages";
import { User } from "store";
import "./App.scss";

const App = () => {
  return (
    <React.Suspense>
      <BrowserRouter>
        <Routes>
          {User.isAuth() ? (
            <>
              <Route path="/catalogs" element={<CatalogsPage />} />
              <Route path="/application/:id" element={<ApplicationDetailsPage />} />
              <Route path="/results/:id" element={<ResultsDetailsPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/admin/catalogs" element={<AdminCatalogsPage />} />
              <Route path="/admin/review/:id" element={<AdminFormPage />} />
            </>
          ) : (
            <Route element={<Navigate to="/login" />} />
          )}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default observer(App);
