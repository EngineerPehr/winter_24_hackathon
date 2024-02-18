import React from "react";
import { FaListUl } from "react-icons/fa6";

// A nifty little dropdown menu that I got from Flowbite
export default function DropDownMenuButton({ options }) {
    return (
        <>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-trigger="click" data-dropdown-offset-skidding="88" data-dropdown-offset-distance="10" data-dropdown-placement="left" className="text-lg" type="button"><FaListUl /></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">{options[0]}</a>
                </li>
                <li>
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">{options[1]}</a>
                </li>
                <li>
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">{options[2]}</a>
                </li>
                <li>
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">{options[3]}</a>
                </li>
                <li>
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">{options[4]}</a>
                </li>
            </ul>
        </div>
        </>
    )
}