import React from 'react';
import { PatientProps } from '../types';

const Patient: React.FC<PatientProps> = ({patient}) => {
  return (
    <div className={`py-3 px-4 flex justify-between items-center ${patient.name === 'Jessica Taylor' ? 'bg-[#D8FCF7]' : ''}`}>
      <div className="flex gap-2">
        <img src={`images/${patient.image}.png`} alt="Settings" className="w-[48px] h-[48px]" />
        <div className="flex-column gap-1">
          <p className="text-gray-700 text-sm font-bold">{patient.name}</p>
          <p className="text-[#707070] text-sm">{`${patient.gender}, ${patient.age}`}</p>
        </div>
      </div>
      <button type="button">
        <img src='images/More-Horiz.svg' alt="More options" className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Patient;
