import React from 'react';

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnostics }) => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F6F7F8]">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold tracking-wider">
                Problem/Diagnosis
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold tracking-wider">
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
