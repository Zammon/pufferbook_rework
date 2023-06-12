import { DetailPosts, SimpleComic, SimpleNovel } from "../postInterface";

export interface FeedInterface {
    posts?: DetailPosts[];
    novels?: SimpleNovel[];
    comics?: SimpleComic[],
}