import React from 'react';

interface VitalSignsProps {
    respiratoryRate: number;
    temperature: number;
    heartRate: number;
}

const VitalSigns: React.FC<VitalSignsProps> = ({ respiratoryRate, temperature, heartRate }) => {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#E0F3FA] rounded-lg p-6">
                <img src="/images/respiratory_rate.png" alt="respiratory rate" className="mb-4 h-16 w-16" />
                <div className="text-lg font-medium">Respiratory Rate</div>
                <div className="text-3xl font-bold mt-1">{respiratoryRate} bpm</div>
                <div className="text-gray-500 mt-1 text-sm">Normal</div>
            </div>
            <div className="bg-[#FFE6E9] rounded-lg p-6">
                <img src="/images/temperature.png" alt="temperature" className="mb-4 h-16 w-16" />
                <div className="text-lg font-medium">Temperature</div>
                <div className="text-3xl font-bold mt-1">{temperature}°F</div>
                <div className="text-gray-500 mt-1 text-sm">Normal</div>
            </div>
            <div className="bg-[#FFE6F1] rounded-lg p-6">
                <img src="/images/HeartBPM.png" alt="Heart BPM" className="mb-4 h-16 w-16" />
                <div className="text-lg font-medium">Heart Rate</div>
                <div className="text-3xl font-bold mt-1">{heartRate} bpm</div>
                <div className="flex items-center text-gray-500 mt-1">
                    <img src="/images/ArrowDown.png" alt="line arrow down" className='mr-2' />
                    <span className='text-sm'>Lower than Average</span>
                </div>
            </div>
        </div>
    );
};

export default VitalSigns;
