import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Auth from "../features/auth";

const Login = lazy(() => import("../features/login"));
const Arizalar = lazy(() => import("../features/application/pages"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Statistic = lazy(() => import("../features/statistic/pages/Statistic"));
const Doctors = lazy(() => import("../features/doctor/pages/Doctors"));
const Bemorlar = lazy(() => import("../features/bemorlar/page"));
const Adminlar = lazy(() => import("../features/adminlar/page"));
const Sozlamalar = lazy(() => import("../features/sozlamalar/page"));
const DoctorDtels = lazy(() => import("../features/doctor/pages/doctorDtels"));

export const AppRouter = () => {
  const routes = useRoutes([
    {
      element: <Auth />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            { path: "/", element: <Statistic /> },
            { path: "doctors", element: <Doctors /> },
            { path: "doctor/:id", element: <DoctorDtels /> },
            { path: "ariza", element: <Arizalar /> },
            { path: "bemor", element: <Bemorlar /> },
            { path: "admin", element: <Adminlar /> },
            { path: "sozlamalar", element: <Sozlamalar /> },
          ],
        },
      ],
    },

    { path: "/login", element: <Login /> },
  ]);

  return routes;
};
