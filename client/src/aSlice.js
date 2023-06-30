import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserName: "None",
    Password: "None",
    Logged_In: false,
    Nightmode: false
}

export const aSlice = createSlice({
    name: 'a',
    initialState,
    reducers: {
        ChangePassword: (state, action) => {
            state.Password = action.payload;
        },
        ChangeLogged_In: (state) => {
            state.Logged_In = !state.Logged_In;
        },
        ChangeUserName:(state,action)=>{
            state.UserName = action.payload
        },
        ActiveNightmode: (state) => {
            state.Nightmode = !state.Nightmode;
        }
    }
})

export const { ChangeLogged_In, ChangePassword, ActiveNightmode } = aSlice.actions;

export default aSlice.reducer;