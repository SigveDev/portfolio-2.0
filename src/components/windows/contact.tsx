import Draggable from "react-draggable";

import ContactIcon from "../../assets/contact.png";
import Close from "../../assets/close.png";

const Contact = ({
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
        x: (window.innerWidth / 10) * 7.8,
        y: (window.innerHeight / 10) * 6.9,
      }}
      onStart={(e) => setFocus("contact", e)}
    >
      <div
        className={`w-[20%] h-[20%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
      >
        <div className="cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="flex flex-row items-center justify-start gap-1 handle grow">
            <img src={ContactIcon} alt="Contact" className="w-6 h-6" />
            <h4 className="mb-1 font-semibold text-white">Contact</h4>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              className="flex items-center justify-center w-6 h-6 bg-red-600 border-none rounded-sm"
              name="close"
              onClick={() => closeWindow("contact")}
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
          onClick={(e) => setFocus("contact", e)}
        >
          <div className="flex flex-col w-full h-full gap-2">
            <h2 className="text-2xl font-bold">Contact:</h2>
            <div>
              <p className="font-semibold">Email:</p>
              <p>stomten@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+47 405 34 485</p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Contact;
