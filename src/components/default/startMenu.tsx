import Me from "../../assets/me.jpg";

import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";

import Shutdown from "../../assets/shutdown.png";

const StartMenu = ({ closeStartMenu }: { closeStartMenu: () => void }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      onClick={() => closeStartMenu()}
    >
      <div
        id="menu"
        className="absolute left-0 bottom-12 z-[100] rounded-md p-2 h-fit w-[20%] flex flex-col gap-2 bg-gradient-to-b from-[#245edb] via-[#3887e8] via-50% to-[#245edb]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full gap-2">
          <img
            src={Me}
            alt="Me"
            className="w-12 h-12 border-2 rounded-sm border-slate-200"
          />
          <div className="flex items-center h-12 w-fit">
            <h2 className="mb-1 text-lg font-semibold text-white h-fit">
              Sigve Tomten
            </h2>
          </div>
        </div>
        <div className="bg-[#ece9d8] gap-2 flex flex-col p-1 border-2 border-t-[#8c857b] border-l-[#8c857b] border-b-[#fcfaf7] border-r-[#fcfaf7]">
          <a
            href="https://www.linkedin.com/in/sigve-tomten-44754424b/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full h-10 gap-2"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
            <div className="flex items-center h-full w-fit">
              <p className="mb-1 font-semibold text-md">LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/SigveDev"
            target="_blank"
            rel="noreferrer"
            className="flex w-full h-10 gap-2"
          >
            <img src={Github} alt="Github" className="w-10 h-10" />
            <div className="flex items-center h-full w-fit">
              <p className="mb-1 font-semibold text-md">Github</p>
            </div>
          </a>
        </div>
        <div className="flex justify-end w-full gap-2">
          <button
            onClick={() => window.location.reload()}
            className="flex gap-2"
          >
            <img src={Shutdown} alt="Shutdown" className="rounded-sm w-7 h-7" />
            <div className="flex items-end h-full w-fit">
              <p className="text-white mb-[0.175rem]">Turn Off Computer</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
