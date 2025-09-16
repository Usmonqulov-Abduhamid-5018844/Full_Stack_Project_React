import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/api";


export const LoginKey = "User"

export const useLogin = () => {

 const client  = useQueryClient()

    const Login = useMutation({
        mutationFn: (data: any) => api.post("admin/login", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey: [LoginKey]})
        }
    })


  return { Login };
};
