import { ReactNode } from "react";

export interface BaseDropdownInterface {
    icon?: string | ReactNode;
    dropdown?: ReactNode;
    margin?: string;
    padding?: string;
    styled?: string;
    position: any;
    amount?: number;
    open: boolean;
    setOpen: any;
    onClick?: (status: boolean)=>void;
}

