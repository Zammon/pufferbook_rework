import { createSlice } from '@reduxjs/toolkit';
import { FeedInterface } from '../../Interfaces/reduxInterfaces/feedInterface';

const initialState:FeedInterface = {
    posts: [],
    novels: [],
    comics: []
}

const Authorization = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, actions)=> {
            state.posts = actions.payload
        },

        register: (state, actions)=> {
            state.novels = actions.payload
        },

        forgotpassword: (state, actions)=> {
            state.comics = actions.payload
        }
    } 
});

export const { login, register, forgotpassword } = Authorization.actions;
export default Authorization.reducer;