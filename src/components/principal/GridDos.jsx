
import { useState, useEffect } from "react";

import { Card, CardContent, CardTitle } from "../ui/card"
import proyecto from "../../assets/proyecto1.png";

import html from "../../assets/html5.svg"
import css from "../../assets/css3.svg"
import js from "../../assets/javascript.svg"
import tailwind from "../../assets/tailwindcss.svg"
import react from "../../assets/react2.svg"
import next from "../../assets/nextdotjs.svg"
import Btn from "../Btn";
import { Check, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const GridDos = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col justify-between">
                {/* Card de proyecto */}
                <div className="flex-1 mb-4 relative">
                    <Card className="bg-[#D4D9DB] border-none h-full flex items-center justify-center overflow-hidden mb-2 group relative">
                        <CardContent className="overflow-hidden">
                            <img
                                src={proyecto}
                                alt="Proyecto"
                                className="rounded-sm w-full h-full object-cover drop-shadow-md"
                                style={{
                                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
                                    transition: "transform 0.1s"
                                }}
                            />
                            <Link to={"/proyects"} className="hidden group-hover:flex absolute inset-0 backdrop-filter backdrop-blur-sm justify-center items-center duration-1000">
                                <Btn text={"Ver proyectos"} bg={"bg-zinc-800"} textColor={"text-white"}/>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                {/* Card logos */}
                <div className="flex-1">
                    <Card className="bg-zinc-800 border-none h-full flex items-center justify-center">
                        <CardContent className="grid grid-cols-3 gap-4 w-full h-full p-4">
                            <div  className="flex items-center justify-center w-full h-full">
                                <img src={html} alt="HTML5" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                            <div  className="flex items-center justify-center w-full h-full">
                                <img src={css} alt="CSS3" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                            <div className="flex items-center justify-center w-full h-full">
                                <img src={js} alt="JavaScript" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                            <div className="flex items-center justify-center w-full h-full">
                                <img src={tailwind} alt="TailwindCSS" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                            <div className="flex items-center justify-center w-full h-full">
                                <img src={react} alt="React" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                            <div className="flex items-center justify-center w-full h-full">
                                <img src={next} alt="Next.js" className="w-1/2 h-1/2 filter invert hover:scale-110 duration-300" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* Card de enlaces */}
            <div className=" ">
                <Card className="bg-[#D4D9DB] border-none h-full w-full flex flex-col p-4">
                    <CardTitle className="md:text-2xl font-semibold mb-4 dark:text-zinc-800 md:py-4">
                        ¿Quieres contactar conmigo?
                    </CardTitle>
                    <ul className="space-y-2 md:space-y-10 md:pl-2">
                        <li className="flex gap-4">
                            <button onClick={() => copyToClipboard('alejandro.solerr2@gmail.com')} className="hover:dark:text-black hover:scale-105 duration-300 dark:text-zinc-800 flex font-semibold gap-5">
                                <Mail />Correo electrónico
                            </button>
                            {copied && <span className="flex items-center justify-center transition-all duration-300">¡Copiado!<Check className="size-4"/></span>}
                        </li>
                        <li>
                            <a href="https://github.com/alejandrosr2" className="hover:dark:text-black hover:scale-105 duration-300 dark:text-zinc-800 flex font-semibold gap-5"><Github />GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alejandro-soler-rond%C3%A1n-10587b299/" className="hover:dark:text-black hover:scale-105 duration-300 dark:text-zinc-800 flex font-semibold gap-5"><Linkedin />Linkedin</a>
                        </li>
                    </ul>
                </Card>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex-1 mb-4">
                    <Card className="bg-[#D4D9DB] border-none h-full flex items-center justify-center overflow-hidden mb-2">
                        <CardContent className="dark:text-zinc-800 font-semibold h-full flex pt-6 ">
                            Estoy ilusionado por contribuir a un equipo dinámico donde pueda seguir creciendo y aplicando mis habilidades para crear productos excepcionales.
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1">
                    <Card className="bg-zinc-800 border-none h-full flex items-center justify-center p-4">
                        <CardTitle className="text-white ">
                            Junior<span className="block">Front End</span><span className="block">Developer</span>
                        </CardTitle>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default GridDos;
