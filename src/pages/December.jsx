import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";

const December = () => {
    return(
        <div>
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title= "December 2023" />
                <SootheSensesPara />
            </div>
        </div>
    )
}

export default December;