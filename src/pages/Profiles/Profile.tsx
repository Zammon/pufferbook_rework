import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom"

export default function Profile() {
    const { id } = useParams();

    return(
        <div className="">
            Profile: {id}
        </div>
    )
}