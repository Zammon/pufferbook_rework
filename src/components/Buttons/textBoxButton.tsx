import { Link } from "react-router-dom";
import { TextBoxInterface } from "../../Interfaces/buttonInterface";

export default function TextBoxButton({
    text = "",
    url = "#",
    bgColor = "bg-transparent",
    bgColorHover = "hover:bg-grayLabel",
    fontSize = "text-[13px]",
    fontWeight = "font-medium",
    width = "w-auto",
    height = "h-[30px]",
    margin = "",
    padding = "p-[5px]",
    styled = "trasitions flex justify-center items-center rounded-[6px] cursor-pointer",
}:TextBoxInterface) {
    return(
        <Link to={url}>
            <div className={`${styled} ${width} ${height} ${fontWeight} ${margin} ${padding} ${bgColor} ${bgColorHover} ${fontSize}`}>
                {text}
            </div>
        </Link>
    )
}