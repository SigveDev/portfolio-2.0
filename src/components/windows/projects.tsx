import Draggable from "react-draggable";

import ProjectIcon from "../../assets/projects.png";
import Close from "../../assets/close.png";

import Project1 from "../../assets/prod1.png";
import Project2 from "../../assets/prod2.png";
import Project3 from "../../assets/prod3.png";
import Project4 from "../../assets/prod4.png";

const Projects = ({
  closeWindow,
  setFocus,
  zIndex,
}: {
  closeWindow: (window: string) => void;
  setFocus: (window: string) => void;
  zIndex: number;
}) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      scale={1}
      defaultPosition={{
        x: (window.innerWidth / 10) * 1,
        y: (window.innerHeight / 10) * 1,
      }}
    >
      <div
        className={`w-[50%] h-[70%] flex flex-col items-center justify-center absolute`}
        style={{ zIndex: zIndex * 10 }}
        onClick={() => setFocus("projects")}
      >
        <div className="handle cursor-grab flex items-center px-1 w-full h-8 bg-gradient-to-b from-[#3887e8] via-[#2768dc] via-10% to-[#245edb] to-90% rounded-t-md">
          <div className="flex flex-row items-center">
            <img src={ProjectIcon} alt="Personal" className="w-6 h-6" />
            <h4 className="font-semibold text-white mb-1">Projects</h4>
          </div>
          <div className="grow flex flex-row items-center justify-end">
            <button
              className="bg-red-600 border-none rounded-sm flex justify-center items-center h-6 w-6"
              onClick={() => closeWindow("projects")}
            >
              <img src={Close} alt="Close" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="w-full grow border-x-4 border-b-4 border-[#245edb] bg-[#ece9d8] p-2 flex gap-8 flex-col overflow-y-scroll justify-start items-center">
          <h2 className="w-full text-start font-bold text-2xl">
            Projects i have made:
          </h2>
          <div className="grid grid-cols-5 gap-2">
            <div className="w-full flex justify-center items-center col-span-2">
              <img src={Project1} alt="Project 1" className="w-full" />
            </div>
            <div className="col-span-3 flex flex-col">
              <h5 className="font-semibold text-lg">HC Auth</h5>
              <p>
                HC Auth was my take on an OAuth alternative where you could have
                one senteral login to use on different websites. The website has
                an dashboard where you could register your own apps to integrate
                the auth into and list up all pages you have logged into with HC
                Auth. You can set a custom avatar and change your name, email
                and password and all teh changes will take effect on the
                websites you have logged into asap.
              </p>
              <a href="https://auth-dev.hcklikk.com" className="underline">
                https://auth-dev.hcklikk.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="w-full flex justify-center items-center col-span-2">
              <img src={Project2} alt="Project 2" className="w-full" />
            </div>
            <div className="col-span-3 flex flex-col">
              <h5 className="font-semibold text-lg">HC Hub</h5>
              <p>
                HC Hub is an youtube clone where you can watch videos people
                have uploaded. The only form of authentication teh page currenty
                supports is HC Auth and it gets th user's pfp and info from an
                api that talks to the same backend that HC Auth uses after the
                user has authorized for the first time. The page is make with
                Vite, Tailwind CSS and ShadCn.
              </p>
              <a href="https://hub.hcklikk.com" className="underline">
                https://hub.hcklikk.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="w-full flex justify-center items-center col-span-2">
              <img src={Project3} alt="Project 3" className="w-full" />
            </div>
            <div className="col-span-3 flex flex-col">
              <h5 className="font-semibold text-lg">Teams AI</h5>
              <p>
                Teams AI as a page made to look like Microsoft Teams where you
                can chat with an AI based on GPT-4o with some custom
                pre-configuration so its name is "Ola Nordmann".
              </p>
              <a href="https://teams.sigve.dev" className="underline">
                https://teams.sigve.dev
              </a>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="w-full flex justify-center items-center col-span-2">
              <img src={Project4} alt="Project 4" className="w-full" />
            </div>
            <div className="col-span-3 flex flex-col">
              <h5 className="font-semibold text-lg">HC Comics</h5>
              <p>
                HC Comics is a page Where you can read comics me and my friends
                create and post. This page is made with Vite and Tailwind CSS.
                The whole page will react to the latest posted comic and change
                colors to match.
                <br />
                This page does also use HC Auth for authentication, but it also
                does have its own authentication.
              </p>
              <p className="underline">WIP</p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;