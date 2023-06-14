import { useRef } from "react";
import { SearchInputInterface } from "../../Interfaces/inputInterface";

export default function SearchInput({
    icon,
    iconSize = "w-[15px]",
    onChange,
    onClick,
    placeholder,
    styled = "flex h-[30px] w-full",
    }:SearchInputInterface) {

    const ref = useRef<HTMLInputElement>(null);

    const hadleFocusInput  = () => {
        if(!ref.current) return;
        ref.current.focus();
    }    
    
    return(
        <div className={styled} onClick={hadleFocusInput}>
            <div className={`flex justify-center items-center mx-[10px] ${iconSize} h-auto cursor-pointer`}>
                {icon}
            </div>
            <input
                ref={ref} 
                className="flex h-full w-full outline-none border-none mr-[5px] cursor-pointer focus:cursor-text" 
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}/>
        </div>
    )
}