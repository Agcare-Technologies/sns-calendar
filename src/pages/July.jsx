import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";

const July = () => {
    return(
        <div>
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title = "July 2024" />
                <SootheSensesPara />
            </div>
        </div>
    )
}

export default July;