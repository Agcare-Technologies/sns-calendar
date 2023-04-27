import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({path}) => {
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(path)} className="w-40 h-20 bg-red-200">

        </div>
    )
}

export default CalenderCard;