import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const doctorKey = "doctorKey";

export const useDoctor = () => {
  // const client = useQueryClient();

  const getFinished = (params?: any) =>
    useQuery({
      queryKey: [doctorKey, params],
      queryFn: () => api.get("doctor/finished", { params }).then((res) => res.data),
    });
  const getDoctors = (params?: any) =>
    useQuery({
      queryKey: [doctorKey, params],
      queryFn: () => api.get("doctor", { params }).then((res) => res.data),
    });

  const getDoctorById = (id: number) =>
    useQuery({
      queryKey: [doctorKey, id],
      queryFn: () => api.get(`doctor/${id}`).then((res) => res.data),
    });

  return { getFinished, getDoctorById, getDoctors };
};
