import { BadgePlus, Home, LayoutDashboard, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import DashboardItem from "./SidebarItems";

const Sidebar = ({ className }: { className: string }) => {
  const [subItemShow, setSubItemShow] = useState("");
  const [toggle, setToggle] = useState({});
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

  return (
    <aside
      className={cn("h-screen sticky top-0 left-0 overflow-auto", className)}
    >
      <div className="bg-gray-100 w-full h-full py-5 px-4">
        <nav className="flex flex-col gap-2 mt-4 relative">
          {sidebarItems?.map((item, index) => (
            <DashboardItem
              item={item}
              index={index}
              openDrawer={true}
              key={index}
              subItemShow={subItemShow}
              setSubItemShow={setSubItemShow}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
