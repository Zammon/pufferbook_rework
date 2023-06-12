import { Link } from "react-router-dom";

interface ChatsInterface {
    img?: string;
    name?: string;
    lastedChat?: string;
    time?: string;
    active?: boolean;
    url?: string;
}

interface ChatDropdownInterface {
    chats: ChatsInterface[];
}

function Items({img, name, time, url = "#", active, lastedChat}:ChatsInterface) {
    return(
        <Link className="flex w-auto h-auto no-underline items-notification" to={url}>
            <div className="flex h-auto min-h-[50px] w-full">
                <div className="flex justify-center items-center rounded-[50%] w-[51px] h-[51px] min-w-[51px] mr-[16px] bg-grayLabel overflow-hidden">
                    <img src={img} alt="" />
                </div>
                <div className="flex flex-col w-full pr-[10px]">
                    <div className="grid grid-cols-2">
                        <div className="text-[14px] font-bold text-black">
                            {name}
                        </div>
                        <div className="justify-self-end text-[12px] font-medium">
                            {time}
                        </div>
                    </div>
                    <div className="flex h-auto w-full">
                        {lastedChat}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function ChatDropdown({chats = []}:ChatDropdownInterface) {
    return(
        <div className="base-box flex flex-col w-[358px] h-[500px] rounded-[6px] p-[18px] bg-whitePuf">
            <div className="flex items-center text-[15px] font-black h-[27px] w-full mb-[15px]">
                Chat
            </div>
            <div className="flex flex-col w-full h-full overflow-auto ">
                {
                    chats?.map((chat, key)=>{
                        return <Items 
                        key={key} 
                        img={chat.img} 
                        name={chat.name} 
                        lastedChat={chat.lastedChat} 
                        time={chat.time} 
                        url={chat.url}
                        active={chat.active}/>
                    })
                }
            </div>
        </div>
    );
}