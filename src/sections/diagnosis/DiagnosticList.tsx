import React from 'react';
import { DiagnosticListProps } from '../../types';

const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnostics }) => {
  return (
    <div className="bg-white rounded-2xl p-5 mt-8">
      <h2 className="text-2xl font-semibold mb-10 text-gray-700">Diagnostic List</h2>
      <div className="overflow-x-auto overflow-y-auto max-h-[230px]">
        <table className="min-w-full">
          <thead className=" bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-3xl text-left text-sm font-bold tracking-wider text-gray-700">
                Problem/Diagnosis
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-bold tracking-wider text-gray-700">
                Description
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-3xl text-left text-sm font-bold tracking-wider text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diagnostics.map((diagnostic, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{diagnostic.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{diagnostic.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
