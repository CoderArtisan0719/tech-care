import React from 'react';
import emily from '../assets/Layer 8.png';
import ryan from '../assets/Layer 1.png';
import brandon from '../assets/Layer 3.png';
import jessica from '../assets/Layer 2.png';
import samantha from '../assets/Layer 6.png';
import ashley from '../assets/Layer 12.png';
import olivia from '../assets/Layer 10.png';
import tyler from '../assets/Layer 9.png';
import kevin from '../assets/Layer 4.png';
import dylan from '../assets/Layer 5.png';
import nathan from '../assets/Layer 7.png';
import mike from '../assets/pexels-photo-1222271.png';
import more from '../assets/More-Horiz.svg';

interface PatientProps {
  patient: {
    name: string;
    gender: string;
    age: number;
    image: string;
  };
}

const patientImages: { [key: string]: string } = {
  emily,
  ryan,
  brandon,
  jessica,
  samantha,
  ashley,
  olivia,
  tyler,
  kevin,
  dylan,
  nathan,
  mike,
};

const Patient: React.FC<PatientProps> = ({patient}) => {
  const patientImage = patientImages[patient.image];

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <img src={patientImage} alt="Settings" className="w-[48px] h-[48px]" />
        <div className="flex-column gap-1">
          <p className="text-[#072635] text-sm font-bold">{patient.name}</p>
          <p className="text-[#707070] text-sm">{`${patient.gender}, ${patient.age}`}</p>
        </div>
      </div>
      <button type="button">
        <img src={more} alt="More options" className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Patient;
