import { useState, useEffect } from "react";
import StartLogo from "../assets/startLogo.png";

import Personal from "../assets/personal.png";
import Projects from "../assets/projects.png";
import Skills from "../assets/skills.png";

const Navbar = ({
  openWindow,
  activeWindow,
}: {
  openWindow: (window: string) => void;
  activeWindow: string;
}) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);

      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full h-12 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% flex flex-row absolute bottom-0 left-0">
      <button className="flex flex-row gap-1 rounded-r-lg justify-center items-center w-fit h-full py-2 px-4 bg-[radial-gradient(circle,_rgba(60,175,60,1)_0%,_rgba(53,134,53,1)_80%)]">
        <img src={StartLogo} alt="Start Logo" className="w-8 h-8" />
        <h3 className="text-white font-semibold text-3xl mb-1">start</h3>
      </button>
      <div className="w-fit flex flex-row items-center gap-2 ml-2">
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 bg-transparent border-none ${
            activeWindow === "personal" && "bg-[#3286f4]"
          }`}
          onClick={() => openWindow("personal")}
        >
          <img src={Personal} alt="Personal" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 bg-transparent border-none ${
            activeWindow === "project" && "bg-[#3286f4]"
          }`}
          onClick={() => openWindow("project")}
        >
          <img src={Projects} alt="Projects" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 bg-transparent border-none ${
            activeWindow === "skills" && "bg-[#3286f4]"
          }`}
          onClick={() => openWindow("skills")}
        >
          <img src={Skills} alt="Skills" className="w-8 h-8" />
        </button>
      </div>
      <div className="ml-auto px-4 py-2 bg-[radial-gradient(circle,_rgba(19,153,237,1)_80%,_rgba(34,191,237,1)_100%)] border-l border-black">
        <h3 className="text-white font-semibold text-lg">{time}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
