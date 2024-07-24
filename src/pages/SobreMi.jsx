import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel,  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";

function SobreMiPage() {
    return (
        <>
        <div className="flex flex-row items-center justify-evenly mt-4">
            <div className="flex flex-col">
                <h1 className="text-4xl font-semibold text-center mb-4">Sobre Mí</h1>
                <p className="text-lg">
                    Actualmente soy estudiante de Desarrollo de Software <br />
                    Multiplataforma, enfocado en el Desarrollo Web. <br /><br />
                    Dedicado al Frontend pero ampliando mis conocimientos <br />
                    para ser Fullstack. <br /><br />
                    He desarrollado proyectos escolares y páginas web. Los <br />
                    principales proyectos que he realizado han sido un “comercio <br />
                    electrónico” y un “Sistema de Gestión de Estadías (SGE)” <br />
                    para mi universidad
                </p>
                
            </div>
            <div className="flex flex-col gap-2 items-center">
                <img src="../src/img/G400496 CR.jpg" alt="Jose Coronado" className="w-80 h-80"/>
                <section className="flex items-center flex-col justify-center w-64">
                    <h1 className="text-center font-medium text-3xl my-3">Tecnologías</h1>
                    <div className="flex flex-row gap-5 text-3xl flex-wrap my-3">
                    <img src="../src/img/html.png" alt="HTML" className="w-7 h-7" />
                    <img src="../src/img/css.png" alt="CSS" className="w-7 h-7" />
                    <img src="../src/img/js.png" alt="JavaScript" className="w-7 h-7" />
                    <img src="../src/img/tailwindcss.png" alt="Tailwind" className="w-10 h-6" />
                    <img src="../src/img/reactjs.png" alt="ReactJS" className="w-8 h-7" />
                    <img src="../src/img/laravel.png" alt="Laravel" className="w-7 h-7" />
                    <img src="../src/img/php.png" alt="PHP" className="w-10 h-10" />
                    <img src="../src/img/python.png" alt="Python" className="w-8 h-8" />
                    <img src="../src/img/mysql.png" alt="MySQL" className="w-10 h-8" />
                    <img src="../src/img/sqlserver.png" alt="SQLServer" className="w-8 h-8" />
                    <img src="../src/img/mongodb.png" alt="MongoDB" className="w-10 h-6" />
                    <img src="../src/img/sass.png" alt="SASS" className="w-8 h-8" />
                    <img src="../src/img/bootstrap.png" alt="Bootstrap" className="w-8 h-7" />
                    <img src="../src/img/nodejs.png" alt="NodeJS" className="w-10 h-7" />
                    <img src="../src/img/expressjs.png" alt="ExpressJS" className="w-8 h-8" />
                    </div>
                </section>
            </div>
        </div>
        <div className="flex justify-center content-center gap-20">
            <ButtonBack link={'/'} />
            <ButtonNext link={'/proyectos'} />
        </div>
        </>
    )
}

export default SobreMiPage;