import { Code, House, Moon, Sun, UserRound } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const navLinks = [
    {
        href: "/",
        label: <House className=" text-zinc-600  dark:text-zinc-400 transition-all hover:scale-105 duration-300" />
    },
    {
        href: "/about",
        label: <UserRound className=" text-zinc-600  dark:text-zinc-400 transition-all hover:scale-105 duration-300" />
    },
    {
        href: "/proyects",
        label: <Code className=" text-zinc-600  dark:text-zinc-400 transition-all hover:scale-105 duration-300"/>
    },
]

const NavBar = () => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className="md:container md:mx-auto ">
            <nav className="container md:-mx-8 flex justify-between px-10 md:px-32 p-2 fixed bottom-0  z-40  bg-zinc-100 dark:bg-zinc-900  md:gap-0">
                {
                    navLinks.map((link, i) => (
                        <Link to={link.href} key={i}>
                            <div className="w-full" >
                                {link.label}
                            </div>
                        </Link>
                    ))
                }
                <div>
                    <button onClick={toggleTheme} className=" text-zinc-600 px-2 dark:text-zinc-400 transition-all hover:scale-105 duration-300">
                        {theme === "light" ? <Moon /> : <Sun />}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
