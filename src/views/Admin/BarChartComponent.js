import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';
import Swal from 'sweetalert2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartComponent = () => {
  const [selectedData, setSelectedData] = useState('data1');
  const [labels, setLabels] = useState([]);
  const [busData, setBusData] = useState([]);
  const [dataChart, setDataChart] = useState([])

  const data = async () => {
    
    const tokens = localStorage.getItem('token'); 
    try {
      await axios.post('http://localhost:5000/bus/getArretBus', 
      {
        "token": tokens,
      }).then(res=>{
            setDataChart(res.data)
      })
      .catch((error) => {
        Utils.errorPage(error.response.data.message)
      })
    } catch (error) {
      console.error('Erreur de connexion:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur de connexion',
        text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.',
      });
    }
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const tokens = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/bus/getArretBus', { token: tokens });
      const data = response.data;

      // Créez des tableaux temporaires pour les étiquettes et les données de bus
      const tempLabels = [];
      const tempBusData = [];

      data.forEach(item => {
        // Ajoutez chaque arret à tempLabels
        tempLabels.push(item.arret);
        // Ajoutez chaque nbpa à tempBusData
        tempBusData.push(item.nbpa);
      });

      // Mettez à jour les états avec les tableaux temporaires
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

  fetchData(); // Appelez la fonction fetchData pour récupérer les données

}, []); // Le tableau vide indique que ce hook s'exécute uniquement après le montage initial


  // Définir les données
  const dataSets = {
    data1: {
      labels: labels,
      datasets: [
        {
          label: 'Net Profit',
          data: busData,
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




// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';
// import { Utils } from '../../_utils/Utils';
// import Swal from 'sweetalert2';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChartComponent = () => {
//   const [selectedData, setSelectedData] = useState('data1');
//   const [labels, setLabels] = useState([]);
//   const [busData, setBusData] = useState([]);
//   const [dataChart, setDataChart] = useState([])

//   const data = async () => {
    
//     const tokens = localStorage.getItem('token'); 
//     try {
//       const res = await axios.post('http://localhost:5000/bus/getArretBus', { "token": tokens });
//       setDataChart(res.data);
//     } catch (error) {
//       console.error('Erreur de connexion:', error);
//       Utils.errorPage(error.response.data.message);
//       Swal.fire({
//         icon: 'error',
//         title: 'Erreur de connexion',
//         text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.',
//       });
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await data();
//     };
//     fetchData(); // Appelez la fonction fetchData pour récupérer les données

//     const interval = setInterval(() => {
//       fetchData();
//     }, 1000); // Actualiser toutes les secondes

//     return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté

//   }, []); // Le tableau vide indique que ce hook s'exécute uniquement après le montage initial

//   useEffect(() => {
//     // Mettre à jour les étiquettes et les données de bus à partir de dataChart
//     const tempLabels = [];
//     const tempBusData = [];
//     dataChart.forEach(item => {
//       tempLabels.push(item.arret);
//       tempBusData.push(item.nbpa);
//     });
//     setLabels(tempLabels);
//     setBusData(tempBusData);
//   }, [dataChart]);

//   // Définir les données
//   const dataSets = {
//     data1: {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Net Profit',
//           data: busData,
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     data2: {
//       labels: ['A', 'B', 'C', 'D', 'E', 'F'],
//       datasets: [
//         {
//           label: 'Net Profit',
//           data: [100, 150, 200, 250, 300, 350],
//           backgroundColor: 'rgba(54, 162, 235, 0.5)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     // Ajoutez d'autres ensembles de données au besoin
//   };

//   // Définir les options pour le select
//   const selectOptions = Object.keys(dataSets).map(key => ({
//     label: key,
//     value: key,
//   }));

//   // Fonction de gestionnaire de changement pour mettre à jour l'état de selectedData
//   const handleChange = (e) => {
//     setSelectedData(e.target.value);
//   };

//   return (
//     <>
//       {/* Input select pour choisir les données */}
//       <select value={selectedData} onChange={handleChange}>
//         {selectOptions.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>
//       {/* Afficher le graphique basé sur la sélection */}
//       <Bar options={{ scales: { y: { beginAtZero: true }}}}
//            data={dataSets[selectedData]} />
//     </>
//   ); 
// };

// export default BarChartComponent;
