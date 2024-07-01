import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import { Patients } from './sections/patients';
import { PatientDetails } from './sections/patient-detail';
import { LabResults } from './sections/lab-results';
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
        <Patients className="w-[23%]" />
        <div className="flex flex-col flex-grow w-[calc(54%-32px)]">
          {patient && (
            <>
              <Diagnosis patient={patient} />
            </>
          )}
        </div>
        <div className='flex flex-col gap-8 w-[23%]'>
          <PatientDetails />
          <LabResults />
        </div>
      </div>
    </div>
  );
}

export default App;
