import React from "react";
import { NavItemDataProps } from "../types";

interface NavItemProps extends NavItemDataProps {
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ image, label, href, isActive }) => {
  return (
    <li
      className={`flex gap-[9px] justify-center items-center ${
        isActive ? 'px-4 py-[11px] rounded-[41px] bg-[#01F0D0]' : ''
      }`}
      >
      <img src={`/images/${image}.svg`} alt={`${label} icon`} />
      <a href={href} className="text-gray-700 lg:block hidden">
        {label}
      </a>
    </li>
  )
}

export default NavItem;
