import { useState, useEffect } from "react";
import StartLogo from "../assets/startLogo.png";

import Personal from "../assets/personal.png";
import Projects from "../assets/projects.png";
import Skills from "../assets/skills.png";
import Education from "../assets/education.png";
import Contact from "../assets/contact.png";

const Navbar = ({
  openWindow,
  toggleStartMenu,
  activeWindow,
}: {
  openWindow: (window: string) => void;
  toggleStartMenu: () => void;
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
      <button
        className="flex flex-row gap-1 rounded-r-lg justify-center items-center w-fit h-full py-2 px-4 bg-[radial-gradient(circle,_rgba(60,175,60,1)_0%,_rgba(53,134,53,1)_80%)]"
        onClick={() => toggleStartMenu()}
      >
        <img src={StartLogo} alt="Start Logo" className="w-8 h-8" />
        <h3 className="mb-1 text-3xl font-semibold text-white">start</h3>
      </button>
      <div className="flex flex-row items-center gap-2 ml-2 w-fit">
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 border-none ${
            activeWindow === "personal"
              ? "bg-activeNavElement"
              : "bg-transparent"
          }`}
          onClick={() => openWindow("personal")}
        >
          <img src={Personal} alt="Personal" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 border-none ${
            activeWindow === "projects"
              ? "bg-activeNavElement"
              : "bg-transparent"
          }`}
          onClick={() => openWindow("projects")}
        >
          <img src={Projects} alt="Projects" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 border-none ${
            activeWindow === "skills" ? "bg-activeNavElement" : "bg-transparent"
          }`}
          onClick={() => openWindow("skills")}
        >
          <img src={Skills} alt="Skills" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 border-none ${
            activeWindow === "education"
              ? "bg-activeNavElement"
              : "bg-transparent"
          }`}
          onClick={() => openWindow("education")}
        >
          <img src={Education} alt="Education" className="w-8 h-8" />
        </button>
        <button
          className={`flex justify-center rounded-md items-center w-fit h-[85%] px-1 border-none ${
            activeWindow === "contact"
              ? "bg-activeNavElement"
              : "bg-transparent"
          }`}
          onClick={() => openWindow("contact")}
        >
          <img src={Contact} alt="Contact" className="w-8 h-8" />
        </button>
      </div>
      <div className="ml-auto px-4 py-2 bg-[radial-gradient(circle,_rgba(19,153,237,1)_80%,_rgba(34,191,237,1)_100%)] border-l border-black">
        <h3 className="text-lg font-semibold text-white">{time}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
