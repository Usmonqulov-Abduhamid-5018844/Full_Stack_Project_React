import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Arizalar = lazy(() => import("../features/arizalar/page/arizalar"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Statistic = lazy(() => import("../features/statistic/pages/Statistic"));
const Doctors = lazy(() => import("../features/doctor/pages/Doctors"));
const Bemorlar = lazy(() => import("../features/bemorlar/page"))
const Adminlar = lazy(() => import("../features/adminlar/page"))
const Sozlamalar = lazy(() => import("../features/sozlamalar/page"))
const Chiqish = lazy(() => import("../features/chiqish/page"))
const DoctorDtels = lazy(() => import("../features/doctor/pages/doctorDtels"))

export const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Statistic /> },
        { path: "doctors", element: <Doctors /> },
        {path: "doctor/:id", element: <DoctorDtels/>},
        { path: "ariza", element: <Arizalar/> },
        { path: "bemor", element: <Bemorlar/> },
        { path: "admin", element:  <Adminlar/>},
        { path: "sozlamalar", element:  <Sozlamalar/> },
        { path: "chiqish", element: <Chiqish/> },
      ],
    },
  ]);

  return routes;
};
