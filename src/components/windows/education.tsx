import Draggable from "react-draggable";

import EducationIcon from "../../assets/education.png";
import Close from "../../assets/close.png";

const Education = ({
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
        x: (window.innerWidth / 10) * 5,
        y: (window.innerHeight / 10) * 4.5,
      }}
      onStart={(e) => setFocus("education", e)}
    >
      <div
        className={`w-[30%] h-[40%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
      >
        <div className="cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="flex flex-row items-center justify-start gap-1 handle grow">
            <img src={EducationIcon} alt="Education" className="w-6 h-6" />
            <h4 className="mb-1 font-semibold text-white">Education</h4>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              className="flex items-center justify-center w-6 h-6 bg-red-600 border-none rounded-sm"
              name="close"
              onClick={() => closeWindow("education")}
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
          className="w-full grow border-x-4 border-b-4 border-[#245edb] bg-[#ece9d8] p-2 flex justify-center items-center"
          onClick={(e) => setFocus("education", e)}
        >
          <div className="flex flex-col w-full h-full gap-2">
            <h2 className="text-2xl font-bold">Education:</h2>
            <div className="flex flex-col w-full h-full gap-1">
              <p className="font-semibold">2023 - 2025:</p>
              <p>
                I am currently getting my certificate of apprenticeship at
                Intility AS in Oslo, Norway. Where i am working as a developer.
              </p>
            </div>
            <div className="flex flex-col w-full h-full gap-1">
              <p className="font-semibold">2021 - 2023:</p>
              <p>
                I went to Drømtorp VGS in Ski, Norway. Where i studied IT and
                media-production. And i choose to specialize in programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Education;
