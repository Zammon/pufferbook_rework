import { ReactNode } from "react";

export interface BaseDropdownInterface {
    icon?: string | ReactNode;
    openDropdown?: boolean;
    dropdown?: ReactNode;
    margin?: string;
    padding?: string;
    styled?: string;
    position: any;
    onClick?: (status: boolean)=>void;
}