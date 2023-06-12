import { Link } from "react-router-dom";
import { IconButtonInterface } from "../../Interfaces/buttonInterface";

export default function IconButton({
    icon,
    url = "#",
    bgColor = "bg-transparent",
    bgColorHover = "trasitions-brightness",
    size = "30px",
    padding = "p-[5px]",
    margin,
    customClass,
    styled = `flex justify-center items-center cursor-pointer rounded-full overflow-hidden ${bgColor} ${bgColorHover} ${padding}`,
    }:IconButtonInterface) {
    return(
        <Link to={url} className={`flex justify-center items-center w-auto h-auto ${margin}`}>
            <div style={{width: size, minWidth: size, maxWidth: size, height: size, minHeight: size, maxHeight: size,}} 
            className={customClass??styled}>
                {icon}
            </div>
        </Link>
    )
}