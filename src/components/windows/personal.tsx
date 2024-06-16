import Draggable from "react-draggable";

import PersonalIcon from "../../assets/personal.png";
import Close from "../../assets/close.png";

import Me from "../../assets/me.jpg";

const Personal = ({
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
        x: (window.innerWidth / 10) * 3,
        y: (window.innerHeight / 10) * 2,
      }}
    >
      <div
        className={`w-[40%] h-[50%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
        onClick={(e) => setFocus("personal", e)}
      >
        <div className="cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="handle flex flex-row items-center justify-start grow">
            <img src={PersonalIcon} alt="Personal" className="w-6 h-6" />
            <h4 className="font-semibold text-white mb-1">Personal</h4>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              className="bg-red-600 border-none rounded-sm flex justify-center items-center h-6 w-6"
              name="close"
              onClick={() => closeWindow("personal")}
            >
              <img src={Close} alt="Close" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="w-full grow border-x-4 border-b-4 border-[#245edb] bg-[#ece9d8] p-2 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full h-fit flex justify-center items-center">
              <img src={Me} alt="Me" className="w-full" />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Sigve Tomten</h1>
              <p className="font-semibold">About me:</p>
              <p>
                I am a 18 year old developer from Norway. I have been coding for
                about 4 years now and I am currently working at Intility AS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Personal;
