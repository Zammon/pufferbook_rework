import { SearchInputInterface } from "../../Interfaces/inputInterface";

export default function SearchInput({
    icon,
    iconSize = "w-[15px]",
    onChange,
    onClick,
    placeholder,
    styled = "flex h-[30px] w-full",
    }:SearchInputInterface) {
    return(
        <div className={styled}>
            <div className={`flex justify-center items-center mx-[10px] ${iconSize} h-auto`}>
                {icon}
            </div>
            <input 
                className="flex h-full w-full outline-none border-none mr-[5px]" 
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}/>
        </div>
    )
}