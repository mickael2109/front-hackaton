import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChartComponent = () => {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer toutes les données des bus depuis l'API
    const getAllBusData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bus/');
        setBusData(response.data.bus);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    // Appeler la fonction pour récupérer les données des bus lorsque le composant est monté
    getAllBusData();
  }, []);

  const fetchDataForBus = async (bus) => {
    try {
      const response = await axios.get(`http://localhost:5000/arret/getAllArret?arretId=${bus.arretId}&typeBusId=${bus.typeBusId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stop data for bus:', error);
      return null;
    }
  };
  

  const generateChartData = async () => {
    const chartData = {
      labels: [],
      datasets: []
    };

    // Parcourir chaque bus pour récupérer les données des arrêts
    for (const bus of busData) {
      const arretData = await fetchDataForBus(bus);
      if (arretData) {
        // Ajouter les arrêts comme labels
        chartData.labels.push(bus.nom); // Utilisez le nom du bus comme label

        // Ajouter les données d'arrêt au dataset
        chartData.datasets.push({
          label: bus.nom, // Utilisez le nom du bus comme label
          data: [arretData], // Ajoutez les données d'arrêt récupérées
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.5
        });
      }
    }

    return chartData;
  };

  useEffect(() => {
    // Générer les données du graphique une fois que les données des bus sont récupérées
    generateChartData().then(chartData => {
      // Mettre à jour les données du graphique
      setChartData(chartData);
    });
  }, [busData]);

  const [chartData, setChartData] = useState({});

  return (
    <>
      <h1>Line Chart</h1>
      <Line options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Sales Data' }, tooltip: { mode: 'index', intersect: false } } }}
            data={chartData} />
    </>
  );
};

export default LineChartComponent;