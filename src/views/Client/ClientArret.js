import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import ArretMap from './ArretMap';
import axios from 'axios';
import { busService } from '../../_services/bus.service';
import { Utils } from '../../_utils/Utils';
import Swal from 'sweetalert2';

const ClientArret = () => {

    const [arret, setArret] = useState([])
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [dataBus, setDataBus] = useState([]);
    const [valide, setValide] = useState(false)

    const position = [-18.8792, 47.5079]
    let DefaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const handleChange = (e) => {
        setValide(false);
    };
    

    const getAllBus = async () => {
        try {
            busService.getArretAll()
                .then((res) => {
                    setArret(res.data)
                })
        } catch (error) {
            Utils.errorPage(error);
        }
    }


    const actionButton = async (e) => {
        e.preventDefault();

        if (!depart || !arrive) {
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez compléter les champs!', });
        } else {
            // Mettez à jour les coordonnées de départ et d'arrivée ici
            try {
                await axios.post('http://localhost:5000/arret/getTrajetByArret', 
                {
                    "start": depart, 
                    "end" : arrive 
                 }).then(res=>{
                      setDataBus(res.data.coordonnee)
                      setValide(true)
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
        }
    };



    useEffect(() => {
        getAllBus()
    }, [])

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
                        <form onSubmit={actionButton} className='search form-inline my-2 my-lg-0'>
                            <input  className="input" list="data"  placeholder='Arrêt de départ' onChange={(e) => {
                                setDepart(e.target.value)
                                handleChange()
                            }}/>
                            <datalist id='data'>
                                {
                                    arret.map((op) => <option>{op.nom}</option>)
                                }
                            </datalist>
                            <input  className="input" list="data" placeholder="Arrêt d'arrivé" onChange={(e) => {
                                setArrive(e.target.value)
                                handleChange()
                            }} />
                            <datalist id='data'>
                                {
                                    arret.map((op) => <option>{op.nom}</option>)
                                }
                            </datalist>
                           
                            <button type='submit' className='button'>Valider</button>
                        </form>
                    </div>
                    <div className='map-tana'>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <ArretMap dataBus={dataBus} valide={valide}/>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientArret;

