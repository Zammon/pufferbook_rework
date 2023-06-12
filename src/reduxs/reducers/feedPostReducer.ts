import { createSlice } from '@reduxjs/toolkit';
import { FeedInterface } from '../../Interfaces/reduxInterfaces/feedInterface';

const initialState:FeedInterface = {
    posts: [],
    novels: [],
    comics: []
}

const FeedReducer = createSlice({
    name: 'feed',
    initialState: initialState,
    reducers: {
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

export const { fecthPostss, fecthNovels, fecthComics } = FeedReducer.actions;
export default FeedReducer.reducer;