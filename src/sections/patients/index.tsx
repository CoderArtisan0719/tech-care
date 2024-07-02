import React from "react";
import Patient from "../../components/Patient";
import { patientsList } from "../../data/patientsList";

interface PatientsProps {
  className?: string
}

const Patients: React.FC<PatientsProps> = ({className}) => { 
  return (
    <div className={`${className} rounded-2xl bg-white`}>
      <div className="flex justify-between items-center px-5 pt-5">
        <h2 className="text-2xl font-semibold text-gray-700">Patients</h2>  
        <img src='/images/Search.svg' alt="Search" className="w-[18px] h-[18px]"  />
      </div>
      <div className="pt-7 flex flex-col pr-2">
        {
          patientsList.map((patient: any, index: number) => 
            <Patient patient={patient} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default Patients;