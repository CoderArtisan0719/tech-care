import React from "react";
import LabResultItem from "../../components/LabResultItem";

interface LabResultsProps {
  lab_results: string[]
}
const LabResults: React.FC<LabResultsProps> = ({ lab_results }) => {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Lab Results</h2>
      <div className="flex flex-col gap-[5px] max-h-[148px] overflow-auto	">
        {lab_results.length > 0 ? (
          lab_results.map((item: string, index: number) => (
            <LabResultItem key={index} item={item} />
          ))
        ) : (
          <p>No lab results available.</p>
        )}
      </div>
    </div>
  )
}

export default LabResults;
