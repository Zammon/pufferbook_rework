import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Profile() {
    const { profileID } = useParams();

    useEffect(()=>{
        console.log(profileID);
    },[])

    return(
        <div className="">
            Profile: {profileID}
        </div>
    )
}