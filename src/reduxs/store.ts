import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import feedPostReducer from "./reducers/feedPostReducer";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        feed: feedPostReducer
    }
});