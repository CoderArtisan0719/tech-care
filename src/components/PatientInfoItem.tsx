import React from 'react';
import { PatientInfoItemProps } from '../types';

const PatientInfoItem: React.FC<PatientInfoItemProps> = ({icon, label, value}) => {
  return (
    <div className='flex gap-4 items-center'>
      <img src={`/images/${icon}.png`} alt="Calendar" className="w-[42px] h-[42px]" />
      <div>
        <p className='text-gray-700 text-sm'>{label}</p>
        <p className='text-gray-700 text-sm font-bold'>{value}</p>
      </div>
    </div>
  )
}

export default PatientInfoItem;
