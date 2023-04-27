import React from "react";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";

const January = () => {
    return(
        <div>
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title = "January 2024" />
                <SootheSensesPara />
            </div>
        </div>
    )
}

export default January