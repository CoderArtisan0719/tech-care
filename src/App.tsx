import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import SideBar from './sections/patients/Sidebar';
import { fetchPatientData } from './services/api';

import Diagnosis from './sections/diagnosis';

import { Patient } from './types';

function App() {

  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPatientData();
        const jessica = data.find((patient: Patient) => patient.name === 'Jessica Taylor');
        setPatient(jessica);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="relative w-full h-full p-[18px]">
      <Header />
      <div className='flex w-full mt-9 gap-8'>
        <SideBar className="w-[23%]" />
        <div className="flex flex-col flex-grow w-[calc(54%-32px)]">
          {patient && (
            <>
              <Diagnosis patient={patient} />
            </>
          )}
        </div>
        <div className='flex-column w-[23%] p-5 rounded-[16px] bg-white'>
          <h2>Right bar</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
