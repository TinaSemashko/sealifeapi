// Core
import React, { lazy } from "react";
import { Routes as Router, Route } from "react-router";

// Styled
import { Routes } from "../app/routes";

// Pages
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound";

const Home = lazy(() => import("../pages/home"));
const Example = lazy(() => import("../pages/example"));
const Apirest = lazy(() => import("../pages/apirest"));
const Form = lazy(() => import("../pages/form"));
const Admin = lazy(() => import("../pages/admin"));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.example} element={withSuspense(Example)} />
    <Route path={Routes.apirest} element={withSuspense(Apirest)} />
    <Route path={Routes.form} element={withSuspense(Form)} />
    <Route path={Routes.admin} element={withSuspense(Admin)} />
    <Route path="*" element={<NotFound />} />
  </Router>
);
