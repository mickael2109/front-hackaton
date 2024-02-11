import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  const data = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [15, 25, 10],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        borderWidth: 1,
      },
    ],
  };
 
  return (
    <>
      <h1>Doughnut Chart</h1>
      <Doughnut data={data} />;
    </>
  );
};

export default DoughnutChartComponent;