/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRouter } from 'next/dist/client/router';
import useCountryInfo from '@/lib/hooks/useCountryInfo';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CountryInfoPage: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;
  const { countryInfo, error, loading } = useCountryInfo(code);

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (loading) return <p className="text-center text-gray-600 mt-4">Loading...</p>;

  if (!countryInfo) return null;

  const { flagData, populationData, countryInfo: dataInfo } = countryInfo;

  const chartData = {
    labels: populationData.populationCounts.map((count: any) => count.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.populationCounts.map((count: any) => count.value),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Population Over Time',
      },
    },
  };

  return (
    <div className="flex flex-col p-6 md:p-10 lg:p-15 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="text-center md:text-left">
          <div className="flex gap-3">
            <h1 className="text-3xl font-bold text-gray-800">{dataInfo.commonName}</h1>
            <img
              src={flagData.flag}
              alt={`${dataInfo.commonName} flag`}
              className="w-10 h-auto rounded-lg border-2 border-gray-200 shadow-md"
            />
          </div>
          <p className="text-gray-500 text-lg mt-2">Region: {dataInfo.region}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Border Countries:</h2>
        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
          {dataInfo.borders && dataInfo.borders.length > 0 ? (
            dataInfo.borders.map((border: any) => (
              <li
                key={border.countryCode}
                onClick={() => router.push(`/country/${border.countryCode}`)}
                className="hover:text-gray-800 transition cursor-pointer"
              >
                {border.commonName} ({border.officialName})
              </li>
            ))
          ) : (
            <p className="text-gray-500">No border countries available</p>
          )}
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Population Over Time</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
      <button
        onClick={() => router.push('/')}
        className="mt-6 mx-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default CountryInfoPage;