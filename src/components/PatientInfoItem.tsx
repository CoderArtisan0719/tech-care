import React from 'react';

interface PatientInfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const PatientInfoItem: React.FC<PatientInfoItemProps> = ({icon, label, value}) => {
  return (
    <div className='flex gap-4 items-center'>
      <img src={`/images/${icon}.png`} alt="Calendar" className="w-[42px] h-[42px]" />
      <div>
        <p className='text-[#072635] text-sm'>{label}</p>
        <p className='text-[#072635] text-sm font-bold'>{value}</p>
      </div>
    </div>
  )
}

export default PatientInfoItem;
