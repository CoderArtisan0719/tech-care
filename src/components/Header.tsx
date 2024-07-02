import React from 'react';
import NavItem from './NavItem';
import { NavData } from '../data/navItems';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-3 bg-white rounded-[70px]">
      <div className="flex items-center">
        <img src='images/TestLogo.svg' alt="Tech.Care Logo" className="h-10 mr-2" />
      </div>
      <nav>
        <ul className="flex gap-[40px]">
          { NavData.map((item, index) => (
            <NavItem key={index} {...item} isActive={item.label === 'Patients'} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-[9px]">
        <img src="/images/user_avatar.png" alt="Dr. Jose Simmons" className="h-11 w-11 rounded-full" />
        <div className='flex-column pr-3 border-r-[1px] border-[#EDEDED] lg:block hidden'>
          <p className="text-gray-700">Dr. Jose Simmons</p>
          <p className="text-[#707070]">General Practitioner</p>
        </div>
        <div className='flex pl-[3px] gap-3'>
          <img src="/images/Settings.svg" alt="Settings"  />
          <img src="/images/More.svg" alt="More"  />
        </div>
      </div>
    </header>
  );
}

export default Header;
