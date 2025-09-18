
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { api } from "../shared/api";
import { removeToken } from "../features/doctor/store/authSlice";
import type { RootState } from "../app/store";
import Sidebar from "./components/Sidebar";
import Loading from "../features/loading";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = useSelector((state: RootState) => state.authSlice.accessToken);

  const { isError, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: () => api.get("me", { headers: { Authorization: `Bearer ${token}` } }),
    retry: 0,
  });

  useEffect(() => {
    if (isError) {
      dispatch(removeToken());
      nav("/login");
    }
  }, [isError]);

  if (isLoading) return <Loading/>;

  return (
   <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
