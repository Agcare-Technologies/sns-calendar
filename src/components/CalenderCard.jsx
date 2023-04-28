import React from "react";
import { useNavigate } from "react-router-dom";

const CalenderCard = ({path, month}) => {
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(path)} className="flex items-center justify-center max-w-2xl sm:h-40 h-24 bg-red-100 w-full">
            <p className="text-3xl tracking-wider text-center text-white">{month}</p>

        </div>
    )
}

export default CalenderCard;