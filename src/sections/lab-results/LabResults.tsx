import React from "react";
import LabResultItem from "../../components/LabResultItem";

const LabResultsItems = [
  "Blood Tests", "CT Scans", "X-Rays"
]

const LabResults = () => {
  return (
    <div className="py-8 px-5 bg-white rounded-[16px]">
      <h2 className="text-2xl font-bold text-[#072635] mb-[27px]">Lab Results</h2>
      <div className="flex flex-col gap-[5px]">
        {
          LabResultsItems.map((item: string, index: number) => 
            <LabResultItem key={index} item={item} />
          )
        }
      </div>
    </div>
  )
}

export default LabResults;
