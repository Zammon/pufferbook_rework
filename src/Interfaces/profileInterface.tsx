import { DetailPosts, SimpleComic, SimpleNovel } from "./postInterface";

export interface SocialProfile {
    type: string;
    url: string;
}

export interface SettingProfile {
    
}

export interface ProfileReducer {
    profile?: {
        firstname?: string;
        lastname?: string;
        address?: string;
        bio?: string;
        social?: SocialProfile[];
        setting?: SettingProfile;
    };
    posts?: DetailPosts[];
    novels?: SimpleNovel[];
    comics?: SimpleComic[],
}