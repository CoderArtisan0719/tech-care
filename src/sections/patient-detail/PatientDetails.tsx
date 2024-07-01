import React from 'react';
import jessica from '../../assets/Layer 2@2x.png';
import PatientInfoItem from '../../components/PatientInfoItem';

interface PatientInfoProps {
  id: string;
  title: string;
  icon: string;
}

interface FetchedData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: Array<any>;
  diagnostic_list: Array<any>;
  lab_results: Array<string>;
}

const PatientInfoData: PatientInfoProps[] = [
  {
    id: 'date_of_birth',
    title: 'Date Of Birth',
    icon: 'BirthIcon',
  },
  {
    id: 'gender',
    title: 'Gender',
    icon: 'FemaleIcon',
  },
  {
    id: 'phone_number',
    title: 'Contact Info',
    icon: 'PhoneIcon',
  },
  {
    id: 'emergency_contact',
    title: 'Emergency Contacts',
    icon: 'PhoneIcon',
  },
  {
    id: 'insurance_type',
    title: 'Insurance Provider',
    icon: 'InsuranceIcon',
  },
];

const fetchedData: FetchedData = {
  name: 'Jessica Taylor',
  gender: 'Female',
  age: 28,
  profile_picture: 'https://fedskillstest.ct.digital/4.png',
  date_of_birth: '1996-08-23',
  phone_number: '(415) 555-1234',
  emergency_contact: '(415) 555-5678',
  insurance_type: 'Sunrise Health Assurance',
  diagnosis_history: [
    {
      month: 'March',
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 160,
          levels: 'Higher than Average',
        },
        diastolic: {
          value: 78,
          levels: 'Lower than Average',
        },
      },
      heart_rate: {
        value: 78,
        levels: 'Lower than Average',
      },
      respiratory_rate: {
        value: 20,
        levels: 'Normal',
      },
      temperature: {
        value: 98.6,
        levels: 'Normal',
      },
    },
  ],
  diagnostic_list: [
    {
      name: 'Hypertension',
      description: 'Chronic high blood pressure',
      status: 'Under Observation',
    },
  ],
  lab_results: ['Blood Tests', 'CT Scans'],
};

const PatientDetail: React.FC = () => {
  return (
    <div className="py-8 px-5 bg-white rounded-[16px]">
      <div className="flex flex-col gap-6 mb-8 justify-center items-center">
        <img src={jessica} alt="Jessica" className="w-[200px] h-[200px]" />
        <h2 className="text-[#072635] text-2xl font-bold">Jessica Taylor</h2>
      </div>
      <div className="flex flex-col gap-6">
        {PatientInfoData.map((item) => (
          <PatientInfoItem
            key={item.id}
            icon={item.icon}
            label={item.title}
            value={String(fetchedData[item.id as keyof FetchedData])}
          />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button className='px-10 py-[11px] text-[#072635] text-sm bg-[#01F0D0] rounded-[41px]'>Show All Information</button>
      </div>
    </div>
  );
};

export default PatientDetail;
