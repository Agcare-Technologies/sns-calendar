import React from "react"
import CalenderCard from "../components/CalenderCard";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";

const HomePage = () => {
    return(
        <div className= "bg-green-100 ">
            <div className="pt-20 space-y-5 text-center ">
                <LogoSafex />
                <SootheSensesPara />
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 ">
                <CalenderCard path= "/nov" />
                <CalenderCard path= "/dec" />
                <CalenderCard path= "/jan" />
                <CalenderCard path= "/feb" />
                <CalenderCard path= "/mar" />
                <CalenderCard path= "/apr" />
                <CalenderCard path= "/may" />
                <CalenderCard path= "/jun" />
                <CalenderCard path= "/jul" />
                <CalenderCard path= "/aug" />
                <CalenderCard path= "/sep" />
                <CalenderCard path= "/oct" />
                <CalenderCard path= "/nov" />
                <CalenderCard path= "/dec" />

            </div>
        </div>
    )
}

export default HomePage;