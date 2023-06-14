import { createSlice } from '@reduxjs/toolkit';
import { NavbarReducerInterface } from '../../Interfaces/reduxInterfaces/navbarInterface';

const initialState:NavbarReducerInterface = {
    search: "",
    chats: {
        status: false,
        chatList:[],
        amount:0 ,
    },
    notifications: {
        status: false,
        notificationList: [],
        amount: 0 ,
    },
    profile: {
        status: false,
    }
}

const FeedReducer = createSlice({
    name: 'navbar',
    initialState: initialState,
    reducers: {
        setSearch: (state, actions)=> {
            state.search = actions.payload
        },
        setOpenChats: (state, actions)=> {
            state.chats = { ...state.chats, status: actions.payload }
        },
        setOpenNotification: (state, actions)=> {
            state.notifications = { ...state.notifications, status: actions.payload }
        },
        setOpenProfile: (state, actions)=> {
            state.profile = { status: actions.payload }
        },
        setListChats: (state, actions)=> {
            state.chats = { ...state.chats, chatList: actions.payload }
        },
        setListNotifications: (state, actions)=> {
            state.notifications = { ...state.notifications, notificationList: actions.payload }
        },
    } 
});

export const { setOpenChats, setOpenNotification, setOpenProfile, setListChats, setListNotifications } = FeedReducer.actions;
export default FeedReducer.reducer;