import React from 'react';
import PatientInfoItem from '../../components/PatientInfoItem';
import { Patient, PatientDetailProps } from '../../types';
import { PatientInfoData } from '../../data/patientInfoData';

const PatientsDetail: React.FC<PatientDetailProps> = ({ patient }) => {
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 px-5 bg-white rounded-2xl">
      <div className="flex flex-col gap-6 mb-8 justify-center items-center">
        <img src='/images/Layer 2@2x.png' alt="Jessica" className="w-[200px] h-[200px]" />
        <h2 className="text-gray-700 text-2xl font-bold">Jessica Taylor</h2>
      </div>
      <div className="flex flex-col gap-4">
        {PatientInfoData.map((item) => (
          <PatientInfoItem
            key={item.id}
            icon={item.icon}
            label={item.title}
            value={String(patient[item.id as keyof Patient])}
          />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button className='px-10 py-[11px] text-gray-700 text-sm bg-[#01F0D0] rounded-[41px]'>
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default PatientsDetail;
