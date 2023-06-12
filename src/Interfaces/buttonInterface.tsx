import { ReactNode } from "react";

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

export interface TextBoxInterface {
    text?: string;
    url?: string;
    fontSize?: string;
    fontWeight?: string;
    width?: string;
    height?: string;
    styled?: string;
    margin?: string;
    padding?: string;
    bgColor?: string;
    bgColorHover?: string;
}

export interface IconButtonInterface {
    icon?: string | ReactNode;
    url?: string;
    bgColor?: string;
    bgColorHover?: string;
    size?: string;
    padding?: string;
    margin?: string;
    styled?: string;
    customClass?: string;
}