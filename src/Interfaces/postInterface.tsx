// Post type
export interface DetailPosts {
    _id: string,
    creater: {
        profile: string;
        fullName: string;
    },
    title: string;
    imgs?: string[];
    _like: number;
    _comments: number;
    _share: number
    created_at: Date;
}

// Novel type
export interface SimpleNovel {
    _id: string,
    _img: string;
    name: string;
    initials?: string;
    tag?: string[];
}

export interface DetailNovel {
    _id: string,
}

// Comic type
export interface SimpleComic {
    _id: string,
    _img: string;
    name: string;
    initials?: string;
    tag?: string[];
}