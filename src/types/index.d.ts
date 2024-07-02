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
    lab_results: string[];
}
  
export interface NavItemDataProps {
  image: string;
  label: string;
  href: string;
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

export interface VitalSignsProps {
  respiratoryRate: number;
  temperature: number;
  heartRate: number;
}

export interface PatientInfoProps {
  id: string;
  title: string;
  icon: string;
}

export interface PatientDetailProps {
  patient: Patient | null;
}

export interface PatientProps {
  patient: {
    name: string;
    gender: string;
    age: number;
    image: string;
  };
}

export interface VitalSignCardProps {
  icon: string;
  title: string;
  value: string | number;
  unit: string;
  backgroundColor: string;
  status: string;
  statusIcon?: string;
}

export interface PatientInfoItemProps {
  icon: string;
  label: string;
  value: string;
}
