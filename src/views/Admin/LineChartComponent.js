import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  const [selectedData, setSelectedData] = useState('data1');

  const dataSets = {
    data1: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Sales for 2023 (M)',
          data: [3, 2, 2, 1, 5, 4],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.5
        },
      ],
    },
    data2: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [
        {
          label: 'Sales for 2024 (M)',
          data: [4, 3, 5, 2, 6, 3],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.5
        },
      ],
    },
    // Ajoutez d'autres ensembles de données au besoin
  };

  const selectOptions = Object.keys(dataSets).map(key => ({
    label: key,
    value: key,
  }));

  const handleChange = (e) => {
    setSelectedData(e.target.value);
  };

  return (
    <>
      <select value={selectedData} onChange={handleChange}>
        {selectOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <Line options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Sales Data' }, tooltip: { mode: 'index', intersect: false } } }}
            data={dataSets[selectedData]} />
    </>
  );
};

export default LineChartComponent;
