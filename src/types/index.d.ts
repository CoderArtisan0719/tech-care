export interface BloodPressure {
    value: number;
    levels: string;
  }
  
  export interface VitalSign {
    value: number;
    levels: string;
  }
  
  export interface DiagnosisData {
    month: string;
    year: number;
    blood_pressure: {
      systolic: BloodPressure;
      diastolic: BloodPressure;
    };
    heart_rate: VitalSign;
    respiratory_rate: VitalSign;
    temperature: VitalSign;
  }
  
  export interface Diagnostic {
    name: string;
    description: string;
    status: string;
  }
  
  export interface Patient {
    name: string;
    diagnosis_history: DiagnosisData[];
    diagnostic_list: Diagnostic[];
  }
  