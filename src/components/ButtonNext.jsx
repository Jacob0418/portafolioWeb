import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function ButtonNext({link}) {

    return (
        <Link to={link}><button className="bg-[#0E6BA8] rounded-full h-10 w-10 text-xl mt-7 text-white flex text-center items-center justify-center transition-transform hover:scale-110 duration-75 " ><MdArrowForwardIos /></button></Link>
    )
}

export default ButtonNext;