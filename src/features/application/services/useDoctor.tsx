import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const doctorKey = "doctorKey";

export const useDoctorStatus = () => {
    const client = useQueryClient();

  const getDoctors = (params?: any) =>
    useQuery({
      queryKey: [doctorKey, params],
      queryFn: () => api.get("doctor", { params }).then((res) => res.data),
    });

  const getStatus = useMutation({
    mutationFn: ({id, body}: {id: number; body: any}) => 
        api.patch(`doctor/active/${id}`,body).then((res)=> res.data),
    onSuccess: ()=>{
        client.invalidateQueries({queryKey:[doctorKey]})
    }
    
  })

  const getDoctorById = (id: number) =>
    useQuery({
      queryKey: [doctorKey, id],
      queryFn: () => api.get(`doctor/${id}`).then((res) => res.data),
    });

  return { getDoctorById, getDoctors, getStatus };
};
