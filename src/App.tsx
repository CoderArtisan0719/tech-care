import Header from './components/Header';
import { Patients } from './sections/patients';
import DiagnosisHisory from './sections/diagnosis-history/Chart';
import DiagnosticList from './sections/diagnostic-list/DiagnosticList';
import { PatientDetails } from './sections/patient-detail';
import { LabResults } from './sections/lab-results';

function App() {
  return (
    <div className="relative w-full h-full p-[18px]">
      <Header />
      <div className='flex w-full mt-9 gap-8'>
        <Patients className="w-[23%]" />
        <div className="flex flex-col flex-grow w-[calc(54%-32px)] bg-red-300">
          <DiagnosisHisory />
          <DiagnosticList />
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
