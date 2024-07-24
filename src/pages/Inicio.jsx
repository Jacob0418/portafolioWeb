import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import ButtonNext from "../components/ButtonNext";

function InicioPage() {
    return (
        <>
        <div className="flex h-screen items-center justify-center">
            <div className="flex items-center justify-center content-center flex-col">
        <div className="text-black text-center text-5xl font-semibold">
            Hola, Soy <span className="text-[#0E6BA8]">Jose Coronado</span>
        </div>
        <p className="text-xl font-normal mt-7 text-justify">Desarrollador Web especializado en Frontend, <br />
            enfocado en soluciones innovadoras y aprendizaje <br />
            constante, buscando crecer en un entorno de <br />
            innovación continua.</p>
            <div className="text-3xl mt-7 flex flex-row gap-5">
                <a href="https://github.com/Jacob0418" className="hover:scale-110 duration-150"><FaGithub /></a>
                <a href="https://www.instagram.com/coronado_ja04/" className="hover:scale-110 duration-150"><FaInstagram /></a>  
                <a href="https://www.facebook.com/joseantonio.coronadocob?mibextid=ZbWKwL" className="hover:scale-110 duration-150"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/jose-coronado-997266295/" className="hover:scale-110 duration-150"><LiaLinkedin /></a>
            </div>
            {/* <Link to={'/sobre-mi'}><button className="bg-[#0E6BA8] rounded-full h-10 w-10 text-xl mt-7 text-white flex text-center items-center justify-center transition-transform hover:scale-110 duration-75 " ><MdArrowForwardIos /></button></Link> */}
            <ButtonNext link={'/sobre-mi'}/>
            </div>
        </div>
        </>
    )
}

export default InicioPage;