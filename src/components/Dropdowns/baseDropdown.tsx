import { useEffect, useState } from "react";
import { BaseDropdownInterface } from "../../Interfaces/dropdownInterface";
import '../Component.scss'

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
    open = false,
    setOpen,
    amount = 0,
    onClick,
    }:BaseDropdownInterface) {

    return(
        <div className={styled} >
            <div 
                className="base-dropdown-conponent flex justify-center items-center w-auto h-auto" 
                onClick={()=>{
                    setOpen(!open);
                    if(!onClick) return;
                    onClick(!open);
                }}>
                {amount&&amount>0 ? (<div className="amount">{amount}</div>):(<></>)}
                {icon}
            </div>
            {open ? (<div style={position} className={`flex justify-center w-auto h-auto absolute top-[180%]`}>{dropdown}</div>):(<></>)}
        </div>
    )
}