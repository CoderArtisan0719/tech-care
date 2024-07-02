import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Patients from './sections/patients';
import PatientsDetail from './sections/patient-detail';
import LabResults from './sections/lab-results';
import Diagnosis from './sections/diagnosis';
import { fetchPatientData } from './services/api';
import { Patient } from './types';

const App: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPatientData();
        const jessica = data.find((p: Patient) => p.name === 'Jessica Taylor');
        setPatient(jessica);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-full p-[18px]">
      <Header />
      <div className="flex w-full mt-9 gap-8">
        <Patients className="w-[23%]" />
        <div className="flex flex-col flex-grow w-[calc(54%-32px)]">
          {patient && <Diagnosis patient={patient} />}
        </div>
        <div className="flex flex-col gap-8 w-[23%]">
          {patient && (
            <>
              <PatientsDetail patient={patient} />
              <LabResults lab_results={patient.lab_results} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
