import { useState } from "react";
import Background from "../assets/windowsBG.jpg";

import Navbar from "../components/navbar";

import Personal from "../components/windows/personal";

const Home = () => {
  const [activeWindow, setActiveWindow] = useState<string>("personal");
  const [openWindows, setOpenWindows] = useState<string[]>(["personal"]);

  const openWindow = (window: string) => {
    if (activeWindow === window) {
      setActiveWindow("");
      setOpenWindows(openWindows.filter((openWindow) => openWindow !== window));
      return;
    }

    setActiveWindow(window);
    if (!openWindows.includes(window)) {
      setOpenWindows([...openWindows, window]);
    }
  };

  const closeWindow = (window: string) => {
    setActiveWindow("");
    setOpenWindows(openWindows.filter((openWindow) => openWindow !== window));
  };

  return (
    <div className="w-dvw h-dvh relative">
      {openWindows.includes("personal") && (
        <Personal closeWindow={closeWindow} />
      )}

      <Navbar openWindow={openWindow} activeWindow={activeWindow} />
      <img
        src={Background}
        alt="Windows Background"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default Home;
