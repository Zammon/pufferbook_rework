export interface NotificationsInterface {
    profile?: string;
    name?: string;
    time?: string;
    detail?: string;
    url: {
        link: string;
        type: string;
    }
}

export interface ChatsInterface {
    profile?: string;
    name?: string;
    lastChat?: string;
    time?: string;
}

export interface NavbarReducerInterface {
    search?: string;
    notifications: {
        status: boolean;
        notificationList: NotificationsInterface[];
        amount?: number;
    }
    chats: {
        status: boolean
        chatList: ChatsInterface[];
        amount?: number;
    }
    profile: {
        status: boolean
    }
}