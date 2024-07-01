import Header from './components/Header';
import { Patients } from './sections/patients';
import DiagnosisHisory from './sections/diagnosis-history/Chart';
import DiagnosticList from './sections/diagnostic-list/DiagnosticList';

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
        <div className='flex-column w-[23%] p-5 rounded-[16px] bg-white'>
          <DiagnosisHisory />
          <DiagnosticList />
        </div>
      </div>
    </div>
  );
}

export default App;
