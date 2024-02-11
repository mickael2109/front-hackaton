import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartComponent = () => {
  const [selectedData, setSelectedData] = useState('data1');

  // Définir les données
  const dataSets = {
    data1: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Net Profit',
          data: [50, 60, 70, 180, 190, 200],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    data2: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F'],
      datasets: [
        {
          label: 'Net Profit',
          data: [100, 150, 200, 250, 300, 350],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    // Ajoutez d'autres ensembles de données au besoin
  };

  // Définir les options pour le select
  const selectOptions = Object.keys(dataSets).map(key => ({
    label: key,
    value: key,
  }));

  // Fonction de gestionnaire de changement pour mettre à jour l'état de selectedData
  const handleChange = (e) => {
    setSelectedData(e.target.value);
  };

  return (
    <>
      {/* Input select pour choisir les données */}
      <select value={selectedData} onChange={handleChange}>
        {selectOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {/* Afficher le graphique basé sur la sélection */}
      <Bar options={{ scales: { y: { beginAtZero: true }}}}
           data={dataSets[selectedData]} />
    </>
  ); 
};

export default BarChartComponent;
