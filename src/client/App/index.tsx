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
  PDFPage,
} from "client/pages";
import { User } from "store";
import "./App.scss";

const App = () => {
  return (
    <React.Suspense>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!User.isAuth() ? <LoginPage /> : <Navigate to="/catalogs" />}
          />
          <Route
            path="/register"
            element={!User.isAuth() ? <RegisterPage /> : <Navigate to="/catalogs" />}
          />
          {User.isAuth() ? (
            <>
              <Route
                path="/catalogs"
                element={
                  User.user.status === "user" ? <CatalogsPage /> : <Navigate to="/admin/catalogs" />
                }
              />
              <Route
                path="/application/:id"
                element={
                  User.user.status === "user" ? (
                    <ApplicationDetailsPage />
                  ) : (
                    <Navigate to="/admin/catalogs" />
                  )
                }
              />
              <Route
                path="/results/:id"
                element={
                  User.user.status === "user" ? (
                    <ResultsDetailsPage />
                  ) : (
                    <Navigate to="/admin/catalogs" />
                  )
                }
              />
              <Route
                path="/form"
                element={
                  User.user.status === "user" ? <FormPage /> : <Navigate to="/admin/catalogs" />
                }
              />
              <Route
                path="/form/:id"
                element={
                  User.user.status === "user" ? <FormPage /> : <Navigate to="/admin/catalogs" />
                }
              />
              <Route
                path="/admin/catalogs"
                element={
                  User.user.status === "admin" ? <AdminCatalogsPage /> : <Navigate to="/catalogs" />
                }
              />
              <Route
                path="/admin/review/:id"
                element={
                  User.user.status === "admin" ? <AdminFormPage /> : <Navigate to="/catalogs" />
                }
              />
              <Route path="/pdf/:id" element={<PDFPage />} />
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
