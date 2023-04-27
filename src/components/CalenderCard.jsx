import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({path, month}) => {
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(path)} className="flex items-center justify-center h-24 bg-red-100 w-72">
            <p className="text-3xl tracking-wider text-center text-white">{month}</p>

        </div>
    )
}

export default CalenderCard;