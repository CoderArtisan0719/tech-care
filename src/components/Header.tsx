import React from 'react';
import logo from '../assets/TestLogo.svg';
import home from '../assets/Home.svg';
import group from '../assets/Group.svg';
import credit_card from '../assets/Credit_Card.svg';
import chat from '../assets/Chat.svg';
import birth from '../assets/BirthIcon.svg';
import settings from '../assets/Settings.svg';
import more from '../assets/More.svg';
import avatar from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[32px] py-[12px] bg-white rounded-[70px]">
      <div className="flex items-center">
        <img src={logo} alt="Tech.Care Logo" className="h-10 mr-2" />
      </div>
      <nav>
        <ul className="flex gap-[40px]">
            <li className='flex gap-[9px] justify-center items-center'>
                <img src={home} alt="Tech.Care Logo" />
                <a href="#overview" className="text-[#072635]">Overview</a>
            </li>
            <li className='flex gap-[9px] justify-center items-center px-4 py-[11px] rounded-[41px] bg-[#01F0D0]'>
                <img src={group} alt="Tech.Care Logo"  />
                <a href="#overview" className="text-[#072635]">Patients</a>
            </li>
            <li className='flex gap-[9px] justify-center items-center'>
                <img src={birth} alt="Tech.Care Logo"  />
                <a href="#overview" className="text-[#072635]">Schedule</a>
            </li>
            <li className='flex gap-[9px] justify-center items-center'>
                <img src={chat} alt="Tech.Care Logo"  />
                <a href="#overview" className="text-[#072635]">Message</a>
          </li>
          <li className='flex gap-[9px] justify-center items-center'>
              <img src={credit_card} alt="Tech.Care Logo"  />
              <a href="#overview" className="text-[#072635]">Transactions</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-[9px]">
        <img src={avatar} alt="Dr. Jose Simmons" className="h-11 w-11 rounded-full" />
        <div className='flex-column pr-3 border-r-[1px] border-[#EDEDED]'>
          <p className="text-[#072635]">Dr. Jose Simmons</p>
          <p className="text-[#707070]">General Practitioner</p>
        </div>
        <div className='flex pl-[3px] gap-3'>
          <img src={settings} alt="Settings"  />
          <img src={more} alt="More"  />
        </div>
      </div>
    </header>
  );
}

export default Header;
