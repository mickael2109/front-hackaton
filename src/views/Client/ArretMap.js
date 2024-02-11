// LeafletRoutingMachine.js
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

const ArretMap = (props) => {
    const map = useMap();
    const { latitudeDepart, longitudeDepart } = props;

  useEffect(() => {
    // Efface tous les marqueurs de la carte
    map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Ajoute les nouveaux marqueurs pour les emplacements filtrés
    // if (filteredLocations.length > 0) {
    //   filteredLocations.forEach(location => {
    //     const marker = L.marker([location.latitude, location.longitude]).addTo(map);
    //     marker.bindPopup(location.gare); // Affiche le nom du lieu dans la popup
    //   });
    // }
    const marker = L.marker([-18.9190918416808, 47.5241625308991]).addTo(map);
    marker.bindPopup(); // Affiche le nom du lieu dans la popup
  }, [map]); // Déclenche l'effet à chaque changement de filteredLocations ou map

    return null;
};

export default ArretMap;
