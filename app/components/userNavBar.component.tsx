import React, { useState, useRef, useEffect } from "react";
import AnimationWrapper from "~/common/AnimationPresence";
// import { worksexample } from "~/constants";
// import { ProjectCard } from "./work.component";

type Troutes = {
  routes: {
    name: string;
    icon: string;
    IsJsx?: boolean;
  }[];
  defaultIndex?: number;
  initPart?: string;
  defaulthidden?: string[];
  Works?: any;
};
export let ActiveTab: React.RefObject<HTMLButtonElement>;
export let Activelineref: React.RefObject<HTMLHRElement>;

const UserNavBar = ({
  routes,
  defaultIndex = 0,
  defaulthidden,
  Works,
}: Troutes) => {
  const [indexroute, setindexroute] = useState(defaultIndex);
  const [active, setActive] = useState("Featured");

  Activelineref = useRef<HTMLHRElement>(null);
  ActiveTab = useRef<HTMLButtonElement>(null);

  const Changepagestate = (btn: EventTarget, index: number) => {
    if (btn instanceof HTMLButtonElement && Activelineref.current) {
      Activelineref.current.style.width = btn.offsetWidth + "px";
      Activelineref.current.style.left = btn.offsetLeft + "px";
    }
    setindexroute(index);
    setActive(routes[index].name);
  };

  useEffect(() => {
    if (ActiveTab.current && Activelineref.current) {
      Changepagestate(ActiveTab.current, defaultIndex);
    }
  }, [defaultIndex]);

  return (
    // <>
    <div className="relative mb-8 bg-transparent border-b border-gray-700 flex flex-nowrap overflow-x-auto">
      {routes.map((route, i) => {
        return (
          <button
            key={i}
            ref={defaultIndex === i ? ActiveTab : null}
            onClick={(e) => Changepagestate(e.target, i)}
            className={
              "p-4 px-5 capitalize font-medium flex justify-between items-start gap-3 " +
              (indexroute === i ? "text-white " : "text-gray-400 ") +
              (defaulthidden?.includes(route.name) ? " md:hidden " : "")
            }
            //     onChange={()=>SetFiltredWork(route)}
          >
            {route.IsJsx ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <img
                src={route.icon}
                className={`w-6 h-6 p-0   aspect-auto  ${indexroute !== i && " opacity-50"} `}
                alt={route.name}
              />
            )}
            {route.name}
          </button>
        );
      })}
      <hr className=" absolute bottom-0 duration-300" ref={Activelineref} />
    </div>
  );
};
export default UserNavBar;
