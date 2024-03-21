import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";
import { TNavItem } from "@/types/navbar.type";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  selectCurrentTheme,
  toggleDarkTheme,
} from "@/redux/features/theme/themeSlice";
import { Moon, Sun } from "lucide-react";

type TMobileNav = {
  isOpen: boolean;
  handleOutsideClose: (e: MouseEvent) => void;
  navItems: TNavItem[];
};

const MobileNavItem = forwardRef<HTMLUListElement, TMobileNav>(
  ({ isOpen, handleOutsideClose, navItems }, containerRef) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectCurrentUser);
    const darkTheme = useAppSelector(selectCurrentTheme);
    return (
      <div
        onClick={handleOutsideClose}
        className={cn(" lg:hidden fixed inset-0 bg-gray-900/50 invisible ", {
          visible: isOpen,
        })}
      >
        <ul
          ref={containerRef}
          className="flex flex-col text-end divide-y divide-gray-500 absolute right-0 top-14 bg-white dark:bg-slate-600 py-2 px-4"
        >
          {navItems.map((item: TNavItem, i) => (
            <li
              className={cn(
                "rounded-[2px] hover:bg-sky-500/80 hover:text-white font-[500] px-4 py-2",
                {
                  "transition-all": isOpen,
                }
              )}
              key={i}
            >
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
          <li className="py-2">
            {!user?.email ? (
              <Link to={"login"}>
                <button className="bg-green-500 active:bg-green-600 px-2 py-1 rounded-md w-full">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={() => dispatch(logout())}
                className="bg-green-500 active:bg-green-600 px-2 py-1 rounded-md w-full"
              >
                Logout
              </button>
            )}
          </li>
          <li className="py-2">
            <button
              onClick={() => dispatch(toggleDarkTheme())}
              className="py-1.5 w-full flex flex-nowrap justify-center space-x-2 border"
            >
             <span>  Mode</span>
              {darkTheme ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
    );
  }
);

export default MobileNavItem;
