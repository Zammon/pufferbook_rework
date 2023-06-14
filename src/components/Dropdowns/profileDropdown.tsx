import { Link } from "react-router-dom";

interface ProfileDropdownInterface {
    _id?: string;
    profile?: string;
    name?: string;
    wallet?: number;
}

export default function ProfileDropdown({
    _id = "1561461616",
    name = "Zammon",
    profile = "",
    wallet = 0,
    }:ProfileDropdownInterface) {
    return(
        <div className="base-box flex flex-col w-[249px] h-[248px] rounded-[6px bg-whitePuf">
            <Link to={`/profile/${_id}`}>
                <div className="flex items-center w-[100%] h-[55px] px-[22px] hover:bg-[#f7f7f7]">
                    <div className="flex w-[32px] h-[32px] overflow-hidden rounded-[50%]">
                        <img src="/profile_.png" alt="" />
                    </div>
                    <div className="text-[16px] font-black ml-[15px] text-blackPuf">
                        {name}
                    </div>
                </div>
            </Link>
            <div 
                style={{borderBottom: '1px solid #C4C4C4', borderTop: '1px solid #C4C4C4'}} 
                className="flex items-center h-[48px] w-[249px] bg-[#F3F3F3] text-blackPuf px-[22px]">
                    <div className="flex justify-center items-center w-[30px] h-[30px] mr-[15px]">
                        <img className="base-images" src="/icon_coins.png" alt=""/>
                    </div>
                    <div className="flex text-[16px] font-black">
                        {` Your Wallet: ${wallet}`}
                    </div>
            </div>
            <Link className="flex w-[100%] h-[48px] items-center px-[27px] hover:bg-[#f7f7f7]" to="/top-up">
                <div className="flex justify-center items-center w-[20px] h-[15px] mr-[15px]">
                    <img className="base-images" src="/icon_topup.png" alt=""/>
                </div>
                <div className="">
                    TOP UP
                </div>
            </Link>
            <Link className="flex w-[100%] h-[48px] items-center px-[25px] hover:bg-[#f7f7f7]" to="/setting">
                <div className="flex justify-center items-center w-[25px] h-[22px] mr-[15px]">
                    <img className="base-images" src="/icon_setting.png" alt=""/>
                </div>
                <div className="">
                    Setting
                </div>
            </Link>
            <div style={{borderTop: "1px solid #C4C4C4"}} className="flex w-[100%] h-[48px] items-center text-redAlert hover:text-[#ff4336] px-[27px] cursor-pointer">
                <div className="flex justify-center items-center w-[23px] h-[23px] mr-[15px]">
                    <img className="base-images" src="/icon_logout.png" alt=""/>
                </div>
                <div className="text-[15px] font-extrabold">
                    Log out
                </div>
            </div>
        </div>
    )
}