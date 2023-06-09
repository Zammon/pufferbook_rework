export interface SocialButtonInterface {
    url?: string;
    size?: string;
    type?: string;
    color?: string;
    styled?: string;
};

export interface BaseButtonInterface {
    text?: string;
    fontSize?: string;
    textBold?: boolean;
    styled?: string;
    width?: string;
    height?: string;
    margin?: string;
    borderButton?: boolean;
    url?: string;
    onClick?: ()=>void;
}