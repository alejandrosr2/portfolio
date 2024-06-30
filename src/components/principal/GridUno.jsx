
import { Link } from "react-router-dom"
import yo from "../../assets/yo3.png"
import { Card, CardTitle } from "../ui/card"

const GridUno = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between">
                <div className="flex-1 mb-4">
                    <Card className="bg-[#D4D9DB] border-none h-full flex items-center justify-center overflow-hidden mb-2 p-4 ">
                        <Link to={"/about"} className="w-full h-full">
                            <CardTitle className="text-5xl lg:text-7xl hover:scale-95 duration-500 w-full h-full flex items-center justify-center cursor-pointer dark:text-zinc-800">
                                ALEJANDRO
                            </CardTitle>
                        </Link>
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
            <div className="flex items-center justify-center ">
                <img src={yo} alt="Yo" className="w-350px h-400px object-cover rounded-xl" />
            </div>
        </div>
    )
}

export default GridUno
