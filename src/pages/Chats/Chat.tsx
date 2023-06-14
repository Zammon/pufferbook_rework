import { useParams } from "react-router-dom"

export default function Chats() {
    const { id } = useParams();
    
    return(
        <div className="">
            Chats: {id}
        </div>
    )
}