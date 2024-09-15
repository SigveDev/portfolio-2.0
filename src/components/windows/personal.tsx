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
      onStart={(e) => setFocus("personal", e)}
    >
      <div
        className={`w-[40%] h-[50%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
      >
        <div className="cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="flex flex-row items-center justify-start gap-1 handle grow">
            <img src={PersonalIcon} alt="Personal" className="w-6 h-6" />
            <h4 className="mb-1 font-semibold text-white">Personal</h4>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              className="flex items-center justify-center w-6 h-6 bg-red-600 border-none rounded-sm"
              name="close"
              onClick={() => closeWindow("personal")}
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
          onClick={(e) => setFocus("personal", e)}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center w-full h-fit">
              <img src={Me} alt="Me" className="w-full" />
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              <h1 className="text-2xl font-bold">Sigve Tomten</h1>
              <p className="font-semibold">About me:</p>
              <p>
                I am a 19 year old developer from Norway. I have been coding for
                about 5 years now and I am currently working at Intility AS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Personal;
