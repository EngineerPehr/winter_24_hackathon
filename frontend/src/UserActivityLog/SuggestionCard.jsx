import React from "react";
//import healthSymbolsImage from "./health-symbols.jpg"
import healthSymbolsImageGrayscale from "./health-symbols-grayscale.jpg"

export default function SuggestionCard({ suggestion }) {
    return (
        <div className="flex border-2 border-black p-2 my-7">
            <img src={healthSymbolsImageGrayscale} style={{ width: "4rem", height: "4rem"}} alt="health symbols" className="flex content-center"></img>
            <div className="pl-1">
                <h3 className="text-xl">{suggestion.title}</h3>
                <p className="text-sm">{suggestion.tip}</p>
            </div>
        </div>
    )
}