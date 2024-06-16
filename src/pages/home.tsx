import { useState } from "react";
import Background from "../assets/windowsBG.jpg";

import Navbar from "../components/navbar";

import Personal from "../components/windows/personal";
import Projects from "../components/windows/projects";
import Skills from "../components/windows/skills";
import Education from "../components/windows/education";
import Contact from "../components/windows/contact";

import StartMenu from "../components/default/startMenu";

const Home = () => {
  const [activeWindows, setActiveWindows] = useState<string[]>([
    "education",
    "projects",
    "skills",
    "contact",
    "personal",
  ]);
  const [startMenu, setStartMenu] = useState<boolean>(false);

  const openWindow = (window: string) => {
    setStartMenu(false);
    if (activeWindows.includes(window)) {
      if (activeWindows.indexOf(window) === activeWindows.length - 1) {
        setActiveWindows(
          activeWindows.filter((activeWindows) => activeWindows !== window)
        );
        return;
      } else {
        const updatedWindows = [...activeWindows];
        const index = updatedWindows.indexOf(window);
        updatedWindows.splice(index, 1);
        updatedWindows.push(window);
        setActiveWindows(updatedWindows);
        return;
      }
    }

    setActiveWindows((prev) => [...prev, window]);
  };

  const closeWindow = (window: string) => {
    setStartMenu(false);
    if (!activeWindows.includes(window)) return;

    if (activeWindows.length <= 1) {
      setActiveWindows([]);
    } else {
      setActiveWindows(
        activeWindows.filter((activeWindows) => activeWindows !== window)
      );
    }
  };

  const setFocus = (window: string, e: any) => {
    setStartMenu(false);
    if (e.target.name === "close") {
      e.preventDefault();
      e.stopPropagation();
    } else {
      if (activeWindows.includes(window)) {
        const updatedWindows = [...activeWindows];
        const index = updatedWindows.indexOf(window);
        updatedWindows.splice(index, 1);
        updatedWindows.push(window);
        setActiveWindows(updatedWindows);
      }
    }
  };

  const closeStartMenu = () => {
    setStartMenu(false);
  };

  const toggleStartMenu = () => {
    setStartMenu(!startMenu);
  };

  return (
    <div className="relative w-dvw h-dvh">
      <div className="w-full h-[calc(100dvh_-_3rem)]">
        {activeWindows.includes("personal") && (
          <Personal
            closeWindow={closeWindow}
            setFocus={setFocus}
            zIndex={activeWindows.indexOf("personal")}
          />
        )}
        {activeWindows.includes("projects") && (
          <Projects
            closeWindow={closeWindow}
            setFocus={setFocus}
            zIndex={activeWindows.indexOf("projects")}
          />
        )}
        {activeWindows.includes("skills") && (
          <Skills
            closeWindow={closeWindow}
            setFocus={setFocus}
            zIndex={activeWindows.indexOf("skills")}
          />
        )}
        {activeWindows.includes("education") && (
          <Education
            closeWindow={closeWindow}
            setFocus={setFocus}
            zIndex={activeWindows.indexOf("education")}
          />
        )}
        {activeWindows.includes("contact") && (
          <Contact
            closeWindow={closeWindow}
            setFocus={setFocus}
            zIndex={activeWindows.indexOf("contact")}
          />
        )}

        {startMenu && <StartMenu closeStartMenu={closeStartMenu} />}
      </div>

      <Navbar
        openWindow={openWindow}
        toggleStartMenu={toggleStartMenu}
        activeWindow={activeWindows[activeWindows.length - 1]}
      />
      <img
        src={Background}
        alt="Windows Background"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      />
      <h1 className="absolute top-0 left-0 text-transparent -z-20">
        Sigve Tomten | SigveDev
      </h1>
    </div>
  );
};

export default Home;
