import {
  AlignRight,
  BadgePlus,
  BarcodeIcon,
  Home,
  LayoutDashboard,
  LayoutList,
  Moon,
  Sun,
} from "lucide-react";
import React, { useState } from "react";
import DashboardItem from "./SidebarItems";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCurrentTheme,
  toggleDarkTheme,
} from "@/redux/features/theme/themeSlice";

const sidebarItems = [
  {
    name: "Back Home",
    link: `/`,
    icon: Home,
  },
  {
    name: "Dashboard",
    link: `/dashboard`,
    icon: LayoutDashboard,
  },
  {
    name: "Add Winter Clothe",
    link: `create-winter-clothes`,
    icon: BadgePlus,
  },
  {
    name: "All Winter Clothes",
    link: `winter-clothes`,
    icon: LayoutList,
  },
];
const Sidebar = ({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [subItemShow, setSubItemShow] = useState("");
  const [toggle, setToggle] = useState({});
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector(selectCurrentTheme);

  return (
    <>
      {/* main content overlay */}
      {!openDrawer && (
        <div
          onClick={() => setOpenDrawer(!openDrawer)}
          style={{ background: "rgba(80, 21, 76, 0.30)" }}
          className="block md:hidden absolute top-0 left-0 z-10 w-full h-full"
        ></div>
      )}
      <div
        className={`bg-gray-800  z-20 h-full absolute left-0 top-0 md:sticky md:min-h-screen ${
          openDrawer ? "w-12 md:w-60 xl:w-80" : "w-64 smm:w-68 md:w-16"
        } duration-300 md:duration-500`}
      >
        <div
          className={cn("px-1 md:px-4 text-gray-100 sticky top-0 left-0", {
            " md:px-3.5 ": !openDrawer,
          })}
        >
          <div className="pt-3 pr-1 flex justify-end">
            <AlignRight
              className="cursor-pointer active:bg-gray-600 rounded-full text-xl md:text-2xl xl:text-4xl"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 relative">
            {sidebarItems?.map((item, index) => (
              <DashboardItem
                item={item}
                index={index}
                openDrawer={openDrawer}
                key={index}
                subItemShow={subItemShow}
                setSubItemShow={setSubItemShow}
                toggle={toggle}
                setToggle={setToggle}
              />
            ))}
            <button
              onClick={() => dispatch(toggleDarkTheme())}
              className="py-1.5 w-full flex flex-nowrap space-x-3 px-2 md:px-2"
            >
              {darkTheme ? <Sun size={22} /> : <Moon size={22} />}
              <span
                className={cn("", {
                  "hidden md:block": openDrawer,
                  "block md:hidden": !openDrawer,
                })}
              >
                Mode
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
