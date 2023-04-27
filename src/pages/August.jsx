import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import BirdCard from "../components/BirdCard";

const August = () => {
    return(
        <div className="bg-cyan-200">
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title = "August 2024" />
                <SootheSensesPara />
                <div>
                  <BirdCard />
                </div>
            </div>
        </div>
    )
}

export default August;