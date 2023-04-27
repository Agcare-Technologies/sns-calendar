import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const August = () => {
    return(
        <div>
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title = "August 2024" />
                <SootheSensesPara />
            </div>
        </div>
    )
}

export default August;