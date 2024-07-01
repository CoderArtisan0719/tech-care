import React from "react";
import Patient from "../../components/Patient";
import search from '../../assets/Search.svg';
import { patients } from "../../data/patients";

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({className}) => { 
  return (
    <div className={`${className} p-5 rounded-[16px] bg-white`}>
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold text-2xl text-[#072635]">Patients</h2>  
        <img src={search} alt="Search" className="w-[18px] h-[18px]"  />
      </div>
      <div className="pt-10 flex flex-col gap-8">
        {
          patients.map((patient: any, index: number) => 
            <Patient patient={patient} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default Sidebar;