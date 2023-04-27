import React from "react"
import CalenderCard from "../components/CalenderCard";

const HomePage = () => {
    return(
        <div className="bg-sky-100">
            <div>HomePage</div>
            <div className="space-y-5">
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