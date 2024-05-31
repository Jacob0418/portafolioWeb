import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    const partsPort = [
        {
            name : 'inicio',
            url : '/'
        },
        {
            name : 'sobre mi',
            url : '/sobre-mi'
        },
        {
            name : 'proyectos',
            url : '/proyectos'
        }
    ];

    return (
        <header>
            <nav>
                <div className="bg-white w-full top-0 sticky left-0">
                    <div className=" space-x-2 flex flex-row items-center justify-between px-6 py-4">
                    <p className="p-2 text-[#0E6BA8] text-4xl font-semibold">JC</p>
                    <ul className="text-[#0E6BA8] flex flex-row gap-8 p-2 left-0 z-auto uppercase font-medium">
                        {partsPort.map((link) => (
                        <li key={link.url} className="text-[#0E6BA8]">
                            <Link to={link.url} className="text-[#0E6BA8]">
                                {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                <div className="w-full h-1 bg-[#0E6BA8]"></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;