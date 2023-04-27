import React from "react"
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";

const April = () => {
    return(
        <div className="h-screen bg-cyan-200">
            <div>
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title = "April 2024" />
                <SootheSensesPara />
            </div>
            </div>
            <ShowAll />
        </div>
    )
}

export default April;