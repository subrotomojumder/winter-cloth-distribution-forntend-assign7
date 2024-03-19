import { BadgeJapaneseYen, Euro, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '@/assets/images/winter-clothes-logo.png';
export const navItems = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/admin/dashboard",
    name: "Dashboard",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/about",
    name: "About",
  },
];

export const footerItems = [
  {
    category: "Product",
    subCates: [
      { name: "Pricing", href: "#" },
      { name: "Overview", href: "#" },
      { name: "Browse", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  },
  {
    category: "Solutions",
    subCates: [
      { name: " Dark Romance", href: "#" },
      { name: "Resort Prints", href: "#" },
      { name: "Noor", href: "#" },
      { name: "Rumi", href: "#" },
    ],
  },
  {
    category: "Support",
    subCates: [
      { name: "Contact Us", href: "#" },
      { name: "Developers", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    category: "Company",
    subCates: [
      { name: "About", href: "#" },
      { name: "Press", href: "#" },
      { name: "Events", href: "#" },
      { name: "Request Demo ➜", href: "#" },
    ],
  },
  {
    category: "Media",
    subCates: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Gmail", href: "#" },
      { name: "Whatsapp's", href: "#" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="h-full w-full max-w-7xl mx-auto px-4 md:px-[30px] 2xl:px-0 py-8 md:py-12 grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-2">
        <Link to={"/home"}>
          <div className="flex justify-start items-center">
            <img src={logo} className="max-h-14 max-w-14" alt="" />
            <h1 className="text-xl lg:text-2xl">
              <span className="text-white font-bold">Safe</span>
              <span className="text-waring font-bold">Winter</span>
            </h1>
          </div>
        </Link>
        {footerItems.map((item, i) => (
          <div key={i} className="text-gray-400/90">
            <p className="font-medium mb-3 text-gray-300/80">{item.category}</p>
            <ul className="flex flex-col items-start gap-y-2">
              {item.subCates.map((childItem, ind) => (
                <li key={ind}>
                  <a
                    href={childItem.href}
                    className={`text-xs leading-6 capitalize`}
                  >
                    {childItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-gray-500/60 h-[1.2px]" />
      <div className="h-full w-full max-w-7xl mx-auto px-4 md:px-[30px] 2xl:px-0 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-xs">
        <span>@ 2023. All rights reserved.</span>
        <ul className="flex flex-nowrap justify-start md:justify-end gap-5">
          <li>
            <a href={"/"}>Terms</a>
          </li>
          <li>
            <a href={"/"}>Privacy</a>
          </li>
          <li>
            <a href={"/"}>Contact</a>
          </li>
          <li>
            <a className="flex flex-nowrap items-center gap-1.5" href={"/"}>
              <Globe className="inline size-4" /> EN
            </a>
          </li>
          <li>
            <a className="flex flex-nowrap items-center gap-1.5" href={"/"}>
              <Euro className="inline size-4" /> EUR
            </a>
          </li>
          <li>
            <a href={"/"}>
              <BadgeJapaneseYen className=" size-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
