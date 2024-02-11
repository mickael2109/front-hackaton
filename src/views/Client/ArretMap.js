import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

const ArretMap = ({ dataBus, valide }) => {
    const map = useMap();

    useEffect(() => {
        if (!valide) {
            // Effacer tous les marqueurs et les routes de la carte
            map.eachLayer(layer => {
                if (layer instanceof L.Marker || layer instanceof L.Routing.Control) {
                    map.removeLayer(layer);
                }
            });
        } else {
            // Ajouter les marqueurs et les routes uniquement si valide est true
            if (dataBus.length > 0) {
                dataBus.forEach(location => {
                    const marker = L.marker([location.lat, location.long]).addTo(map);
                    marker.bindPopup(location.nomArret + ' (' + location.nbpa + ')');
                });

                const startPoint = [dataBus[0].lat, dataBus[0].long];
                const endPoint = [dataBus[dataBus.length - 1].lat, dataBus[dataBus.length - 1].long];

                const control = L.Routing.control({
                    waypoints: [
                        L.latLng(startPoint[0], startPoint[1]),
                        L.latLng(endPoint[0], endPoint[1])
                    ],
                    show: false
                }).addTo(map);
            }
        }
    }, [dataBus, map, valide]);

    return null;
};

export default ArretMap;
