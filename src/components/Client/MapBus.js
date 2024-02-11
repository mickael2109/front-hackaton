import L from 'leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MapBus = ({ dataBus }) => {
    const map = useMap();
    console.log("dataBus : ",dataBus)
    useEffect(() => {
        // Efface tous les marqueurs de la carte
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Ajoute les nouveaux marqueurs pour les emplacements filtrés
        if (dataBus.length > 0) {
            dataBus.forEach(location => {
                console.log("location : ",location)
                const marker = L.marker([location.lat, location.long]).addTo(map);
                marker.bindPopup(location.nomArret + ' (' + location.nbpa + ')'); // Affiche le nom du lieu dans la popup
            });

            // Définissez les points de départ et d'arrivée (par exemple, le premier et le dernier point de dataBus)
            const startPoint = [dataBus[0].lat, dataBus[0].long];
            const endPoint = [dataBus[dataBus.length - 1].lat, dataBus[dataBus.length - 1].long];

            // Initialisez l'instance de Leaflet Routing Machine
            const control = L.Routing.control({
                waypoints: [
                    L.latLng(startPoint[0], startPoint[1]),
                    L.latLng(endPoint[0], endPoint[1])
                ],
                routeWhileDragging: true,
                show: false // Vous pouvez changer ceci en true si vous souhaitez afficher le panneau de contrôle de routage par défaut
            }).addTo(map);

            // Affiche le chemin sur la carte
            control.route();
        }
    }, [dataBus, map]); 

    return null; // Comme ce composant ne rend pas d'éléments, retournez null
};

export default MapBus;

