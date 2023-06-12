import { useParams } from "react-router-dom"

export default function Content() {
    const { category, profileID  } = useParams();

    return(
        <div className="">
            {category ?? profileID}
        </div>
    )
}