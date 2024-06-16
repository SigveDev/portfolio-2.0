import Draggable from "react-draggable";

import SkillsIcon from "../../assets/skills.png";
import Close from "../../assets/close.png";
import LoadingBar from "../default/loadingBar";

const Skills = ({
  closeWindow,
  setFocus,
  zIndex,
}: {
  closeWindow: (window: string) => void;
  setFocus: (window: string, e: any) => void;
  zIndex: number;
}) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      scale={1}
      defaultPosition={{
        x: (window.innerWidth / 10) * 5.1,
        y: (window.innerHeight / 10) * 0.7,
      }}
      onStart={(e) => setFocus("skills", e)}
    >
      <div
        className={`w-[40%] h-[60%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
      >
        <div className="cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="flex flex-row items-center justify-start gap-1 handle grow">
            <img src={SkillsIcon} alt="Skills" className="w-6 h-6" />
            <h4 className="mb-1 font-semibold text-white">Skills</h4>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              className="flex items-center justify-center w-6 h-6 bg-red-600 border-none rounded-sm"
              name="close"
              onClick={() => closeWindow("skills")}
            >
              <img
                src={Close}
                alt="Close"
                className="w-4 h-4 pointer-events-none"
              />
            </button>
          </div>
        </div>
        <div
          className="w-full grow border-x-4 border-b-4 border-[#245edb] bg-[#ece9d8] p-2 flex flex-col justify-center items-center"
          onClick={(e) => setFocus("skills", e)}
        >
          <h2 className="w-full text-2xl font-bold text-start">Skills:</h2>
          <div className="flex flex-col w-full h-full gap-2">
            <div className="flex flex-col w-full gap-1 h-fit">
              <p>Javascript / Typescript with React/Vite:</p>
              <LoadingBar value={70} />
            </div>
            <div className="flex flex-col w-full gap-1 h-fit">
              <p>C# with Web-APIs:</p>
              <LoadingBar value={20} />
            </div>
            <div className="flex flex-col w-full gap-1 h-fit">
              <p>Javascript with Node/Express:</p>
              <LoadingBar value={50} />
            </div>
            <div className="flex flex-col w-full gap-1 h-fit">
              <p>Git:</p>
              <LoadingBar value={60} />
            </div>
            <div className="flex flex-col w-full gap-1 h-fit">
              <p>MongoDB:</p>
              <LoadingBar value={70} />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Skills;
