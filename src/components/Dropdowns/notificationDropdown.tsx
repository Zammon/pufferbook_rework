import { Link } from "react-router-dom";
import { NotificationsInterface } from "../../Interfaces/reduxInterfaces/navbarInterface";

interface NotificationItemInterface {
    items: NotificationsInterface[];
}

function Items({profile, name, time, detail, url}:NotificationsInterface) {
    return(
        <Link className="flex w-auto h-auto no-underline items-notification" to={url?.link ?? "#"}>
            <div className="flex h-auto min-h-[50px] w-full">
                <div className="flex justify-center items-center rounded-[6px] w-[51px] h-[51px] min-w-[51px] mr-[16px] bg-grayLabel overflow-hidden">
                    <img className="base-images" src={profile} alt="" />
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
                        return <Items key={key} profile={item.profile} name={item.name} detail={item.detail} time={item.time} url={item.url}/>
                    })
                }
            </div>
        </div>
    )
}