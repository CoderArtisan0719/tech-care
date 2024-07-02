import React from 'react';
import DiagnosisHistoryChart from './DiagnosisHistoryChart';
import VitalSigns from './VitalSigns';
import DiagnosticList from './DiagnosticList';
import { Patient } from '../../types';

interface DiagnosisHistoryProps {
  patient: Patient;
}

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ patient }) => {
  const latestDiagnosis = patient.diagnosis_history[patient.diagnosis_history.length - 1];

  return (
    <>
      <div className='bg-white rounded-2xl p-5'>
        <h1 className="text-2xl font-semibold mb-10 text-gray-700">Diagnosis History</h1>
        <DiagnosisHistoryChart data={patient.diagnosis_history} />
        <VitalSigns 
          respiratoryRate={latestDiagnosis.respiratory_rate.value} 
          temperature={latestDiagnosis.temperature.value} 
          heartRate={latestDiagnosis.heart_rate.value} 
        />
      </div>
      <DiagnosticList diagnostics={patient.diagnostic_list} />
    </>
  );
};

export default DiagnosisHistory;
