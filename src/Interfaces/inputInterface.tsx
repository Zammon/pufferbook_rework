import { ReactNode } from "react";

export interface BaseInputInterface {
    name?: string;
    type?: "text"|"password"|"number"|"email"|"checkbox"|"radio";
    placeholder?: string;
    styled?: string;
    textValidation?: string;
    statusValidation?: boolean;
    onChange?: (event:any)=>void; 
}

export interface CheckBoxInputInterface {
    size?: string;
    status?: boolean;
    bgActive?: string;
    bgNoneActive?: string;
    onClick?: (status:boolean)=>void;
}

export interface SearchInputInterface {
    icon?: string | ReactNode;
    iconSize?: string;
    placeholder?: string;
    styled?: string;
    onChange?: (e:any)=>void;
    onClick?: ()=>void;
}