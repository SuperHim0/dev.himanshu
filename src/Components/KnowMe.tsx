import { NavLink } from "react-router-dom";
import bgImage from "../assets/luffy.png";

const KnowMe = () => {
  return (
    <div className="mt-20">
        <h1 className="font-primary text-3xl font-semibold">Get To Know Me</h1>
        <div className="mt-5 flex gap-5 font-primary">
            <NavLink to={"/about"} className="w-1/2 flex flex-col gap-5 justify-center items-center shadow-lg bg-gray-100 rounded-lg p-5">
                <h2 className="text-xl font-semibold">About Me</h2>
                <p>Who I am and What I do</p>
                <img src={bgImage} alt="bgImage" className="hover:scale-120 transition-transform duration-300 w-[20%]" />
            </NavLink>
           <NavLink to={"/tech-stack"} className="w-1/2 flex flex-col gap-5 justify-center items-center shadow-lg bg-gray-100 rounded-lg p-5">
                <h2 className="text-xl font-semibold">Tech Stack</h2>
                <p>Tech i Worked With</p>
                <img src={bgImage} alt="bgImage" className="hover:scale-120 transition-transform duration-300 w-[20%]" />
            </NavLink>
        </div>


    </div>
  )
}

export default KnowMe