import React from "react";

interface LabResultItemProps {
  item: string
}
const LabResultItem:React.FC<LabResultItemProps> = ({item}) => {
  return (
    <div className={`flex justify-between gap-[40px] px-4 py-[11px] ${item === 'CT Scans' ? 'bg-gray-100' : ''}`}>
      <span className="text-sm">{item}</span>
      <img src="/images/download.png" alt="Download" className="w-5 h-5" />
    </div>
  )
}

export default LabResultItem;
