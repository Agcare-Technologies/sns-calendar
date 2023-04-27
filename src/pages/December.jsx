import React from "react"
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";

const December = () => {
    return(
        <div className="bg-cyan-200">
            <div className="pt-40 space-x-5 text-center">
                <LogoSafex />
                <MonthTitle title= "December 2023" />
                <SootheSensesPara />
                <div>
                  <BirdCard />
                </div>
            </div>
        </div>
    )
}

export default December;