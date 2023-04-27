import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({path}) => {
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(path)} className="h-24 bg-red-100 w-72">

        </div>
    )
}

export default CalenderCard;