import React from 'react';
import VitalSignCard from '../../components/VitalSignCard';
import { VitalSignsProps } from '../../types';

const VitalSigns: React.FC<VitalSignsProps> = ({ respiratoryRate, temperature, heartRate }) => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      <VitalSignCard
        icon="/images/respiratory_rate.png"
        title="Respiratory Rate"
        value={respiratoryRate}
        unit="bpm"
        backgroundColor="bg-[#E0F3FA]"
        status="Normal"
      />
      <VitalSignCard
        icon="/images/temperature.png"
        title="Temperature"
        value={temperature}
        unit="°F"
        backgroundColor="bg-[#FFE6E9]"
        status="Normal"
      />
      <VitalSignCard
        icon="/images/HeartBPM.png"
        title="Heart Rate"
        value={heartRate}
        unit="bpm"
        backgroundColor="bg-[#FFE6F1]"
        status="Lower than Average"
        statusIcon="/images/ArrowDown.png"
      />
    </div>
  );
};

export default VitalSigns;
