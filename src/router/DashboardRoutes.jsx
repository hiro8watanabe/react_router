import { Dashboard } from "../Dashboard";
import { UrlPrameter } from "../UrlPrameter";

export const DashboardRoutes = [
  {
    path: "/",
    exact: true,
    children: <Dashboard />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlPrameter />
  }
];
