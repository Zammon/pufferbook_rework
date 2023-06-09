import { createSlice } from '@reduxjs/toolkit';
import { ProfileReducer } from '../../Interfaces/profileInterface';

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

const FeedReducer = createSlice({
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

export const { fecthProfile, fecthPostss, fecthNovels, fecthComics } = FeedReducer.actions;
export default FeedReducer.reducer;