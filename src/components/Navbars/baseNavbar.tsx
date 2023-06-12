import { Link } from "react-router-dom";
import TextBoxButton from "../Buttons/textBoxButton";
import { NavbarInterface } from "../../Interfaces/navbarInterface";
import BaseInput from "../Inputs/baseInput";
import SearchInput from "../Inputs/searchInput";
import IconButton from "../Buttons/iconButton";
import BaseDropdown from "../Dropdowns/baseDropdown";
import { SetPositions } from "../../Services/setPositions";
import NotificationDropdown, { ItemNotificationInterface } from "../Dropdowns/notificationDropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChatbox, IoNotificationsSharp } from "react-icons/io5";
import ChatDropdown from "../Dropdowns/chatDropdown";

export default function BaseNavbar({children}:NavbarInterface) {
    const items:ItemNotificationInterface[] = [
        {
        name:"Zammon V",
        img:"/",
        detail:"have create post",
        time:"10 min",
        url:{
            link:"#",
            type:"newpost"
        }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
        {
            name:"Zammon V",
            img:"/",
            detail:"have create post",
            time:"10 min",
            url:{
                link:"#",
                type:"newpost"
            }
        },
    ];

    return(
        <div className="flex flex-col w-full h-auto">
            <div className="flex justify-center items-center w-[100vw] h-[60px] min-h-[60px] bg-blackPuf">
                <div className="flex items-center h-full w-auto">
                    <Link to="/" className="flex justify-center items-center w-[30px] h-[30px] mr-[55px]">
                        <img className="w-full h-full" src="/Pufferbook_logo.png" alt="" />
                    </Link>
                    <TextBoxButton 
                        text="Home"
                        url="/"
                        fontSize="text-[15px]" 
                        fontWeight="font-bold" 
                        margin="mr-[35px]" 
                        padding="py-[18px] px-[15px]"
                        bgColor="bg-transparent text-whitePuf"
                        bgColorHover="hover:text-blackPuf hover:bg-grayLabel"/>
                    <TextBoxButton 
                        text="List Contents"
                        url="/contents"
                        fontSize="text-[15px]" 
                        fontWeight="font-bold" 
                        margin="mr-[35px]"
                        padding="py-[18px] px-[15px]"
                        bgColor="bg-transparent text-whitePuf"
                        bgColorHover="hover:text-blackPuf hover:bg-grayLabel"/>
                </div>
                <div className="flex items-center w-full h-full max-w-[627px]">
                    <SearchInput 
                        iconSize="w-[15px]"
                        icon={<AiOutlineSearch size="10rem" fill="#7B7B7B"/>} 
                        styled="flex bg-whitePuf w-full h-[30px] border-solid border-[1px] rounded-[6px] overflow-hidden" 
                        placeholder="ค้นหาบน Puffer book:"/>
                </div>
                <div className="flex h-full items-center ml-[45px]">
                    <IconButton 
                        icon={<img src="/gridicons_create.png" alt="" />}
                        url="/create-content"
                        size="40px"
                        margin="mr-[28px]"
                        bgColorHover="trasitions hover:bg-grayHoverDropdown"
                        />
                    <BaseDropdown 
                        icon={
                            <IconButton 
                                size="35px"
                                icon={<IoChatbox size="10rem" fill="#fff" />}
                                bgColorHover="trasitions hover:bg-grayHoverDropdown" />
                            }
                        margin="mr-[28px]"
                        dropdown={<ChatDropdown chats={[]} />}
                        position={SetPositions({size: 358, position: "center"})}
                        />
                    <BaseDropdown 
                        icon={
                            <IconButton 
                                size="35px"
                                icon={<IoNotificationsSharp size="10rem" fill="#fff" />}
                                bgColorHover="trasitions hover:bg-grayHoverDropdown" />
                            }
                        dropdown={<NotificationDropdown items={items} />}
                        position={SetPositions({size: 358, position: "center"})}
                        />
                </div>
            </div>
            {children}
        </div>
    )
}