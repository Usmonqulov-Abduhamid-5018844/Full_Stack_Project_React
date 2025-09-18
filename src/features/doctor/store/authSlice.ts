import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState{
    accessToken: string | null

}

const initialState: IState = {
    accessToken: localStorage.getItem("accessToken") || null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken:(state, action:PayloadAction<string>)=>{
            state.accessToken = action.payload
            localStorage.setItem("accessToken", state.accessToken)
        },
        removeToken: (state) => {
            state.accessToken = null
            localStorage.removeItem("accessToken")
        }
    }
})

export const {setToken, removeToken} = authSlice.actions
export default authSlice.reducer