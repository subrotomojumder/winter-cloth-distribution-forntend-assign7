import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentTheme } from "@/redux/features/theme/themeSlice";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const darkTheme = useAppSelector(selectCurrentTheme);
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setDarkTheme(true)
  //   } else {
  //     setDarkTheme(false)
  //   }
  // }, [])
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <section className="max-w-full flex min-h-screen pl-12 md:pl-0 mx-auto relative">
        <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <div className="flex-1 max-w-full">
          <div className="min-h-screen ">
            <Outlet />
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
