import { useEffect, useState } from "react";
import Background from "../assets/windowsBG.jpg";

import Navbar from "../components/navbar";

import Personal from "../components/windows/personal";
import Projects from "../components/windows/projects";

const Home = () => {
  const [activeWindows, setActiveWindows] = useState<string[]>([
    "projects",
    "personal",
  ]);

  const openWindow = (window: string) => {
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
    console.log(window);
    if (!activeWindows.includes(window)) return;

    if (activeWindows.length <= 1) {
      setActiveWindows([]);
    } else {
      setActiveWindows(
        activeWindows.filter((activeWindows) => activeWindows !== window)
      );
    }
  };

  const setFocus = (window: string) => {
    if (activeWindows.includes(window)) {
      const updatedWindows = [...activeWindows];
      const index = updatedWindows.indexOf(window);
      updatedWindows.splice(index, 1);
      updatedWindows.push(window);
      setActiveWindows(updatedWindows);
    }
  };

  return (
    <div className="w-dvw h-dvh relative">
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
      </div>

      <Navbar
        openWindow={openWindow}
        activeWindow={activeWindows[activeWindows.length - 1]}
      />
      <img
        src={Background}
        alt="Windows Background"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <h1 className="text-transparent absolute top-0 left-0 -z-20">
        Sigve Tomten | SigveDev
      </h1>
    </div>
  );
};

export default Home;
