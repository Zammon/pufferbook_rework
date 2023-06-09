import { Link } from "react-router-dom";
import { BaseButtonInterface } from "../../Interfaces/buttonInterface";

export default function BaseButton({ 
    url = "#",
    text = "Button", 
    styled,
    fontSize = "text-[13px]",
    width = "w-full", 
    height = "h-[42px]",
    margin = '',
    borderButton = false,
    textBold = false, 
    onClick
}:BaseButtonInterface) {
    return(
        <Link to={url}>
            {
                borderButton ?
                <button 
                className={styled ?? `${textBold ? 'font-bold':'font-light'} ${margin} ${fontSize} ${height} ${width} min-h-10  px-2 text-orangPuf bg-whitePuf border-solid border-orangPuf border-[2px] rounded-md cursor-pointer`} 
                onClick={onClick}>
                    {text}
                </button>
                :
                <button 
                className={styled ?? `${textBold ? 'font-bold':'font-light'} ${margin} ${fontSize} ${height} ${width} trasitions-brightness min-h-10  px-2 text-whitePuf bg-orangPuf border-none rounded-md cursor-pointer`} 
                onClick={onClick}>
                    {text}
                </button>
            }
        </Link>
    )
}