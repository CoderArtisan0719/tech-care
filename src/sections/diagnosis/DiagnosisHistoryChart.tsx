import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { DiagnosisData } from '../../types';

interface DiagnosisHistoryChartProps {
  data: DiagnosisData[];
}

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DiagnosisHistoryChart: React.FC<DiagnosisHistoryChartProps> = ({ data }) => {
  // Ensure data is sorted by date
  const sortedData = [...data].sort((a, b) => {
    const dateA: any = new Date(`${a.year}-${a.month}-01`);
    const dateB: any = new Date(`${b.year}-${b.month}-01`);
    return dateA - dateB;
  });

  // Get the last 6 months of data
  const filteredData = sortedData.slice(-6);

  const labels = filteredData.map(entry =>
    new Date(`${entry.year}-${entry.month}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  );
  const systolicData = filteredData.map(entry => entry.blood_pressure.systolic.value);
  const diastolicData = filteredData.map(entry => entry.blood_pressure.diastolic.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        labels: labels,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: true,
          text: 'Blood Pressure',
          color: '#333',
          font: {
            size: 14,
            weight: 'bold' as 'bold' | 'normal' | 'lighter' | 'bolder',
          }
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
  };

  return (
    <div className="bg-[#F4F0FE] rounded-2xl p-4 flex flex-col lg:flex-row">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Blood Pressure</h3>
          <div className="flex items-center text-gray-500 mr-4">
            <span>Last 6 months</span>
            <img src="/images/line-arrow-down.png" alt="line arrow down" className='ml-2' />
          </div>
        </div>
        <div className="relative h-[192px]">
          <Line data={chartData} options={options} />
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-6 divide-y">
        <div className="mb-4">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
            <span className="text-[#072635]">Systolic</span>
          </div>
          <strong className="text-2xl text-gray-800">160</strong>
          <div className="flex items-center text-gray-500">
            <img src="/images/ArrowUp.png" alt="line arrow down" className='mr-2' />
            <span className='text-sm'>Higher than Average</span>
          </div>
        </div>
        <div className='pt-4'>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-[#072635]">Diastolic</span>
          </div>
          <strong className="text-2xl text-gray-800">78</strong>
          <div className="flex items-center text-gray-500">
            <img src="/images/ArrowDown.png" alt="line arrow down" className='mr-2' />
            <span className='text-sm'>Lower than Average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistoryChart;
