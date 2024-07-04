
import yo from "../../assets/yo3.png"
import { Card } from "../ui/card"


const About = () => {
    return (
        <div className="container pt-10 pb-20">
            <Card className=" md:p-10 gap-4 bg-[#D4D9DB] dark:bg-zinc-800 border-none h-full md:flex mb-2">
                <div className="flex-1 md:order-2 py-4">
                    <img src={yo} alt="Yo"  className="rounded-xl object-cover drop-shadow"/>
                </div>
                <div className="flex-1">
                    <h1 className="dark:text-zinc-200 font-bold text-2xl md:text-4xl pb-5 text-left">Hola, soy Alejandro Soler.</h1>
                    <p className="dark:text-zinc-300 pb-6 text-left md:text-lg font-semibold">
                        Soy un apasionado desarrollador front-end en el inicio de mi carrera profesional. Comencé en el mundo del desarrollo web de forma autodidacta, impulsado por mi curiosidad por hacer webs que siempre había tenido en mente. Posteriormente, decidí acceder a un bootcamp, donde aprendí unas bases sólidas que me han permitido orientar mejor mi enfoque para poder seguir día a día aprendiendo de forma autodidacta pero de manera más eficiente.
                    </p>
                    <p className="dark:text-zinc-300 pb-6 text-left md:text-lg font-semibold">
                        Aunque todavía no tengo experiencia profesional en el sector, ha llegado el momento en el que me veo preparado para afrontar el desafío de encontrar mi primer trabajo. Tengo unas bases sólidas en HTML, CSS , JavaScript, Tailwind CSS y React. También estoy empezando a usar Next.js y tengo algo de conocimiento en Angular y TypeScript.
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default About