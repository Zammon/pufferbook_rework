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