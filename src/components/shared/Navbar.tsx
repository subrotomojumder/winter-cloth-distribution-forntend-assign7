import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { AlignJustify } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";
import logo from "@/assets/images/winter-clothes-logo.png";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { authenticUserRoutes } from "@/routes/authenticUser.route";
import { unAuthenticUserRoutes } from "@/routes/unAuthenticUser.route";
import { TNavItem } from "@/types/navbar.type";
import MobileNavItem from "./MobileNavItem";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLUListElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  let navItems;
  if (user?.email) {
    navItems = authenticUserRoutes;
  } else {
    navItems = unAuthenticUserRoutes;
  }
  const itemVariants = {
    hover: {
      scale: 1.02,
      textShadow: "0px 0.3px 1px",
      transition: {
        duration: 0.2,
      },
    },
  };
  useMotionValueEvent(scrollYProgress, "change", (scrollValue) => {
    if (scrollValue > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <motion.header
      className={cn(
        "fixed w-full z-[999] py-2 md:py-3 transition-all duration-300 bg-blue-400 ",
        {
          "py-1 md:py-2": scrolled,
        }
      )}
    >
      <nav className="h-full w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-[30px] 2xl:px-0">
        <Link to={"/home"}>
          <div className="flex justify-start items-center">
            <img src={logo} className="max-h-14 max-w-14" alt="" />
            <h1 className="text-xl lg:text-2xl">
              <span className="text-white font-bold">Safe</span>
              <span className="text-waring font-bold">Winter</span>
            </h1>
          </div>
        </Link>
        <Button
          onClick={() => setIsOpen((c) => !c)}
          variant={"ghost"}
          className=" md:hidden rounded-[2px] hover:bg-[#f1f3f529] px-2 text-white hover:text-white"
        >
          <AlignJustify className="shrink-0 size-[22px] sm:size-6" />
        </Button>
        {/* small device */}
        <MobileNavItem
          navItems={navItems}
          handleOutsideClose={handleOutsideClose}
          isOpen={isOpen}
          ref={containerRef}
        />
        {/* large device */}
        <ul className="hidden md:flex justify-end space-x-3 xl:space-x-4 text-white">
          {navItems.map((item: TNavItem, i) => (
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="rounded-[2px] hover:bg-[#e0e4eb17] px-2 py-1 transition-all"
              key={i}
            >
              <NavLink to={item.link}>{item.name}</NavLink>
            </motion.li>
          ))}
          <li>
            {!user?.email ? (
              <Link to={"login"}>
                <button className="bg-green-500 active:bg-green-600 px-2 py-1 transition-all rounded-md">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={() => dispatch(logout())}
                className="bg-green-500 active:bg-green-600 px-2 py-1 transition-all rounded-md"
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
