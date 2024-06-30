import { Card } from "../ui/card"
import proyecto from "../../assets/proyecto1.png";
import proyecto2 from "../../assets/proyecto2.png";
import { ArrowUpRight } from "lucide-react";

const Proyects = () => {
    return (
        <div className="container pb-20">
            <div className="pt-10">
                <h1 className="text-3xl font-semibold pb-2 dark:text-zinc-200">Estos son algunos de los proyectos personales que he realizado.</h1>
                <p className="dark:text-zinc-300 md:text-lg">Aunque he realizado numerosos proyectos, estos son actualmente los que mejor pueden mostrar mis capacidades.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-16 ">
                <div className="flex flex-col border border-zinc-200 drop-shadow-sm rounded-md p-2 dark:bg-zinc-800 dark:border-zinc-700 ">
                    <Card className="flex-1 dark:bg-zinc-800 border-none h-full w-full mb-2 ">
                        <a href="https://finace-tracking.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 scale-95 hover:scale-100 transition-all duration-300">
                            <img src={proyecto} alt="" className="rounded-sm" />
                        </a>
                    </Card>
                    <div className="flex gap-4 py-2 dark:text-zinc-300 overflow-auto text-sm md:text-base">
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">React</p>
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">Nextjs</p>
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">TypeScript</p>
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">Tailwind</p>
                    </div>
                    <div className="flex-1">
                        <div className=" pb-2 dark:text-zinc-200">
                            <a href="https://finace-tracking.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-300">
                                <h2 className="text-xl font-semibold">Tracking Financiero</h2>
                                <ArrowUpRight className="size-4" />
                            </a>
                        </div>
                        <p className="dark:text-zinc-300">
                            Un ejemplo de aplicación que sirve para llevar un seguimiento de los gastos e ingresos de una forma desglosada a lo largo del tiempo.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border border-zinc-200 dark:border-zinc-700 drop-shadow-sm rounded-md p-2 dark:bg-zinc-800 ">
                    <Card className="flex-1 dark:bg-zinc-800 border-none h-full w-full mb-2">
                        <a href="https://example-shop.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 scale-95 hover:scale-100 transition-all duration-300">
                            <img src={proyecto2} alt="" className="rounded-sm" />
                        </a>
                    </Card>
                    <div className="flex gap-4 py-2 dark:text-zinc-300 overflow-auto text-sm md:text-base ">
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">React</p>
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">JavaScript</p>
                        <p className="border border-zinc-200 drop-shadow-sm rounded-full px-2">Tailwind</p>
                    </div>
                    <div className="flex-1">
                        <div className="pb-2 dark:text-zinc-200">
                            <a href="https://example-shop.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-300">
                                <h2 className="text-xl font-semibold">Frontpage Ecommerce</h2>
                                <ArrowUpRight className="size-4" />
                            </a>
                        </div>
                        <p className="dark:text-zinc-300">
                            Un ejemplo de página principal para un negocio online.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects
