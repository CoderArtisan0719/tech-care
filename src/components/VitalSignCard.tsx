import React from 'react';
import { VitalSignCardProps } from '../types';

const VitalSignCard: React.FC<VitalSignCardProps> = ({ icon, title, value, unit, backgroundColor, status, statusIcon }) => {
  return (
    <div className={`rounded-2xl p-4 ${backgroundColor}`}>
      <img src={icon} alt={title} className="mb-4 h-16 w-16" />
      <div className="text-lg font-medium">{title}</div>
      <div className="text-3xl font-bold mt-1 text-gray-700">{value} {unit}</div>
      <div className="flex items-center text-gray-500 mt-1 text-sm">
        {statusIcon && <img src={statusIcon} alt="status icon" className="mr-2" />}
        <span>{status}</span>
      </div>
    </div>
  );
};

export default VitalSignCard;
