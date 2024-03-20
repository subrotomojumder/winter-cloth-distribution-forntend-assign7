import { TSideBarItem } from "@/types/sidebar.types";
import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction, createElement } from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardItem = ({
  item,
  openDrawer,
  index,
  subItemShow,
  setSubItemShow,
  toggle,
  setToggle,
}: {
  item: TSideBarItem;
  openDrawer: boolean;
  index: number;
  subItemShow: string;
  setSubItemShow: Dispatch<SetStateAction<string>>;
  toggle: Record<string, unknown>;
  setToggle: Dispatch<SetStateAction<Record<string, unknown>>>;
}) => {
  const { subMenu, name, icon, link } = item;
  return (
    <div className={`text-sm rounded select-none group relative`}>
      {link ? (
        <div
          onClick={() => {
            setSubItemShow(name);
            setToggle({});
          }}
          className={`${subItemShow === name && "border-2 border-indigo-500"}`}
        >
          <Link to={link}>
            <div className="font-semibold flex items-center gap-3 p-2 hover:bg-gray-400 group">
              <div>{createElement(icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${index + 1}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  openDrawer
                    ? "opacity-0 md:opacity-100 translate-x-10 md:translate-x-0 overflow-hidden"
                    : "md:opacity-0 md:translate-x-28 overflow-hidden"
                } `}
              >
                {name}
              </h2>
              <h2
                className={`${!openDrawer ? "hidden md:block" : "hidden"}
                     absolute left-48 bg-gray-200 font-sans whitespace-pre z-30
                   text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                    group-hover:py-1 group-hover:left-12 md:group-hover:left-14 group-hover:w-fit group-hover:duration-500`}
              >
                {name}
              </h2>
            </div>
          </Link>
        </div>
      ) : (
        <div
          onClick={() => {
            setSubItemShow(name);
            setToggle({ [name]: toggle[name] === name ? "" : name });
            // setToggle(c => c === name ? "" : name)
          }}
        >
          <div
            className={`font-semibold  flex items-center gap-3 p-2 hover:bg-gray-600 group ${
              subItemShow === name && "border-2 border-indigo-500"
            }`}
          >
            <div>{createElement(icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${index + 1}20ms`,
              }}
              className={`whitespace-pre duration-500 ${
                openDrawer
                  ? "opacity-0 md:opacity-100 translate-x-10 md:translate-x-0 overflow-hidden"
                  : "md:opacity-0 md:translate-x-28 overflow-hidden"
              } `}
            >
              {name}
            </h2>
            {subMenu && (
              <ChevronRight
                className={`ml-auto text-lg mt-[2px] ${
                  toggle[name] === name && "-rotate-90"
                } text-white group-hover:text-yellow-200`}
              />
            )}
            <h2
              className={`${!openDrawer ? "hidden md:block" : "hidden"}
                     absolute left-48 bg-gray-200 font-sans whitespace-pre z-30
                   text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                    group-hover:py-1 group-hover:left-12 md:group-hover:left-14 group-hover:w-fit group-hover:duration-500`}
            >
              {name}
            </h2>
          </div>
        </div>
      )}
      {subMenu && subItemShow === name && toggle[name] ? (
        <div className={`pl-2 text-gray-700 `}>
          {subMenu.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.subLink}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold  flex items-center bg-green-600 gap-3 pl-2 pr-4 text-white py-1 my-2"
                  : "font-semibold  flex items-center hover:bg-green-600 gap-3 pl-2 pr-4 hover:text-white py-1 my-2"
              }
            >
              <div>{createElement(menu.subIcon, { size: "18" })}</div>
              <h2 className={`whitespace-pre -ml-1`}>{menu.subName}</h2>
            </NavLink>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DashboardItem;
