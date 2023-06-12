import { createSlice } from '@reduxjs/toolkit';
import { ProfileReducer } from '../../Interfaces/reduxInterfaces/profileInterface';

const initialState:ProfileReducer = {
    profile: {
        firstname:"",
        lastname:"",
        bio:"",
        address:"",
        social: [],
        setting:""
    },
    posts: [],
    novels: [],
    comics: []
}

const profileReducer = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        fecthProfile: (state, actions)=> {
            state.profile = actions.payload
        },

        fecthPostss: (state, actions)=> {
            state.posts = actions.payload
        },

        fecthNovels: (state, actions)=> {
            state.novels = actions.payload
        },

        fecthComics: (state, actions)=> {
            state.comics = actions.payload
        }
    } 
});

export const { fecthProfile, fecthPostss, fecthNovels, fecthComics } = profileReducer.actions;
export default profileReducer.reducer;