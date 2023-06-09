import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialButtonInterface } from "../../Interfaces/buttonInterface";

const socialType = Object.freeze({
    FACEBOOK: "facebook",
    TWITTER: "twitter",
    TWITCH: "twitch",
    YOUTUBE: "youtube",
    PATREON: "patreon",
    GOOGLE: "google"
});

export default function SocialButton({
    url="#", 
    type,
    styled,
    size = "33px",
    color = "bg-blackPuf"
}:SocialButtonInterface) {
    const [icon, setIcon] = useState<ReactNode>("");
    useEffect(()=>{
        switch(type) {
            case socialType.FACEBOOK :
                return setIcon(<img className="flex w-full h-full" src="/facebook_icon.png" alt=""/>);
            case socialType.PATREON :
                return setIcon(<img className="flex w-full h-full" src="/patreon_icon.png" alt=""/>);
            case socialType.TWITCH:
                return setIcon(<img className="flex w-full h-full" src="/twitch_icon.png" alt=""/>);
            case socialType.TWITTER :
                return setIcon(<img className="flex w-full h-full" src="/twitter_icon.png" alt=""/>);
            case socialType.YOUTUBE :
                return setIcon(<img className="flex w-full h-full" src="/youtube_icon.png" alt=""/>);
            case socialType.GOOGLE :
                return setIcon(<img className="flex w-full h-full" src="/google_icon.png" alt=""/>);
            default :
                return setIcon(<>N</>);
        }
    },[type])

    return(
        <Link 
            to={url} 
            style={{width: size, height: size, minWidth: size, maxWidth: size, minHeight: size, maxHeight: size}}
            className={`${color} flex justify-center items-center rounded-[50%] p-[10px] ${styled}`} >
            {icon}
        </Link>
    )
}