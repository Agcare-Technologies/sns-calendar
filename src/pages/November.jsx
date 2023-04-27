import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";

const November = () => {
    return(
        <div className="h-screen bg-cyan-200">
            <div className="flex flex-col items-center justify-center pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title="November 2023" />
                <SootheSensesPara />
                <div>
                  <BirdCard />
                </div>
            </div>
        </div>
    )
}

export default November;