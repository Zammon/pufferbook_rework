import { Link } from "react-router-dom";

export interface ItemNotificationInterface {
    img?: string;
    name?: string;
    time?: string;
    detail?: string;
    url: {
        link: string;
        type: string;
    }
}

interface NotificationItemInterface {
    items: ItemNotificationInterface[];
}

function Items({img, name, time, detail, url}:ItemNotificationInterface) {
    return(
        <Link className="flex w-auto h-auto no-underline items-notification" to={url?.link ?? "#"}>
            <div className="flex h-auto min-h-[50px] w-full">
                <div className="flex justify-center items-center rounded-[6px] w-[51px] h-[51px] min-w-[51px] mr-[16px] bg-grayLabel overflow-hidden">
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
                        {detail}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function NotificationDropdown({items = []}:NotificationItemInterface) {
    return(
        <div className="base-box flex flex-col w-[358px] h-[500px] rounded-[6px] p-[18px] bg-whitePuf">
            <div className="flex items-center text-[15px] font-black h-[27px] w-full mb-[15px]">
                Notification
            </div>
            <div className="flex flex-col w-full h-full overflow-auto ">
                {
                    items.map((item, key)=>{
                        return <Items key={key} img={item.img} name={item.name} detail={item.detail} time={item.time} url={item.url}/>
                    })
                }
            </div>
        </div>
    )
}