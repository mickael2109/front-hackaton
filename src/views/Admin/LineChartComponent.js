import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';
import Swal from 'sweetalert2';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const LineChartComponent = () => {
  const [selectedData, setSelectedData] = useState('data1');
  const [labels, setLabels] = useState([]);
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokens = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/bus/getArretBus', { token: tokens });
        const data = response.data;

        const tempLabels = [];
        const tempBusData = [];

        data.forEach(item => {
          tempLabels.push(item.arret);
          tempBusData.push(item.nbpa);
        });

        setLabels(tempLabels);
        setBusData(tempBusData);
      } catch (error) {
        console.error('Erreur de connexion:', error);
        Utils.errorPage(error.response.data.message);
        Swal.fire({
          icon: 'error',
          title: 'Erreur de connexion',
          text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.',
        });
      }
    };

    fetchData();

  }, []);

  const dataSets = {
    data1: {
      labels: labels,
      datasets: [
        {
          label: 'Net Profit',
          data: busData,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
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
      <Line options={{ scales: { y: { beginAtZero: true }}}} data={dataSets[selectedData]} />
    </>
  );
};

export default LineChartComponent;
