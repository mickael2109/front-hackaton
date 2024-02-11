import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import ArretMap from './ArretMap';

const ClientArret = () => {

    const position = [-18.8792, 47.5079]
    let DefaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
    });
    L.Marker.prototype.options.icon = DefaultIcon;


    return (
        <div className='arret'>
            <div className='arret-content'>
                <div className='text-arret-content'>
                    <div className='titre-gare'>
                        <span>Train Urbain d'Antananarivo</span>
                        <p className='txt'>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. 
                            Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. 
                        </p>
                    </div>
                    <div className='image-gare'>
                        <img src={process.env.PUBLIC_URL + `./media/bus/arretBus.png`} alt='logo-images' />
                    </div>
                </div>
                
                <div className='arret-list-content'>
                    <div className='search-gare'>
                        <form className='search form-inline my-2 my-lg-0'>
                            <input className='input' type='search' placeholder='Arrêt de départ' aria-label='Rechercher' />
                            <input className='input' type='search' placeholder="Arrêt d'arrivé" aria-label='Rechercher' />
                        </form>
                    </div>
                    <div className='map-tana'>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <ArretMap />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientArret;

