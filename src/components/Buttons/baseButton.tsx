import { Link } from "react-router-dom";
import { BaseButtonInterface } from "../../Interfaces/buttonInterface";

export default function BaseButton({ 
    url = "#",
    text = "Button", 
    styled,
    fontSize,
    width,
    height,
    borderButton = false,
    textBold = false, 
    onClick
}:BaseButtonInterface) {
    return(
        <Link to={url}>
            {
                borderButton ?
                <button 
                className={styled ?? `${textBold ? 'font-bold':'font-light'} ${fontSize? fontSize:'text-[13px]'} min-h-10 ${height ? height :'h-[42px]'} ${width ? width :'w-full'} px-2 text-orangPuf bg-whitePuf border-solid border-orangPuf border-[2px] rounded-md cursor-pointer`} 
                onClick={onClick}>
                    {text}
                </button>
                :
                <button 
                className={styled ?? `${textBold ? 'font-bold':'font-light'} ${fontSize? fontSize:'text-[13px]'} trasitions-brightness min-h-10 ${height ? height :'h-[42px]'} ${width ? width :'w-full'} px-2 text-whitePuf bg-orangPuf border-none rounded-md cursor-pointer`} 
                onClick={onClick}>
                    {text}
                </button>
            }
        </Link>
    )
}