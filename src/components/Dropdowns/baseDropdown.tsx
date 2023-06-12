import { useEffect, useState } from "react";
import { BaseDropdownInterface } from "../../Interfaces/dropdownInterface";

export const Positions = Object.freeze({
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right",
})

export default function BaseDropdown({
    icon,
    dropdown,
    margin,
    padding,
    styled = `flex flex-col w-auto h-auto relative ${margin} ${padding}`,
    position,
    openDropdown,
    onClick,
    }:BaseDropdownInterface) {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=>{
        if(!openDropdown) return;
        setOpen(openDropdown);
    },[openDropdown])

    return(
        <div className={styled}>
            <div 
                className="flex justify-center items-center w-auto h-auto" 
                onClick={()=>{
                    setOpen(!open);
                    if(!onClick) return;
                    onClick(!open);
                }}>
                {icon}
            </div>
            {
                open ?
                (
                    <div style={position} className={`flex justify-center w-auto h-auto absolute top-[180%]`}>
                        {dropdown}
                    </div>
                )
                :
                (
                    <></>
                )
            }
            
        </div>
    )
}