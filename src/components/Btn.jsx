
const Btn = ({text, bg, textColor, handler = () => {} }) => {
    return (
        <button className={`${bg} ${textColor} hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}> 
            {text}
        </button>
    )
}

export default Btn