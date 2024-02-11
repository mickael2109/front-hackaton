import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { busService } from '../../_services/bus.service';
import { Utils } from '../../_utils/Utils';
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import MapBus from '../../components/Client/MapBus';

const ClientBus = () => {

    const [showModal, setShowModal] = useState(false);
    const [bus, setBus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    const getAllBus = async () => {
        try {
            setLoading(true);
            busService.getBusAll()
                .then((res) => {
                    setBus(res.data.bus);
                })
        } catch (error) {
            Utils.errorPage(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllBus();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Déplacer filteredLocations après la définition de searchTerm
    const filteredGare = bus.filter((busItem) => {
        return busItem.typeBus.nom.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className='arret'>
            <div className='arret-content'>
                <div className='text-arret-content'>
                    <div className='titre-gare'>
                        <span>Bus Urbain d'Antananarivo</span>
                        <p className='txt'>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. 
                            Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. 
                        </p>
                    </div>
                    <div className='image-gare'>
                        <img src={process.env.PUBLIC_URL + `./media/bus/bus.png`} alt='logo-images' />
                    </div>
                </div>
                
                <div className='arret-list-content'>
                    <div className='search-gare'>
                        <form className='search form-inline my-2 my-lg-0'>
                            <input className='input' type='search' placeholder='Rechercher' aria-label='Rechercher' value={searchTerm} onChange={handleSearchChange}/>
                        </form>
                    </div>
                    <div className='arret-list'>
                        
                        
                        {loading ? (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                            </div>
                        ) : (
                            <>
                                {filteredGare.length > 0 ? (

                                    filteredGare.map((busItem) => (
                                       
                                       <>
                                            <Link to="" onClick={openModal} key={busItem.id}>
                                                <div className="card-item">
                                                    <div className="card-image">
                                                        <img src={process.env.PUBLIC_URL + `./media/bus/114.png`} alt='15' />
                                                    </div>
                                                    <div className="card-body">
                                                        <span>{busItem.typeBus.nom}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <ModalBus showModal={showModal} closeModal={closeModal} idB={busItem.id}/>
                                       </>
                                    ))
                                ) : (
                                    <div>Aucune Bus trouvée.</div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};




const ModalBus = ({ showModal, closeModal, idB }) => {

    const position = [-18.8792, 47.5079]
    let DefaultIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const [idBus, setIdbus] = useState(idB);
    const [dataBus, setDataBus] = useState([]);

    const getBusId = async (idB) => {
        try {
            const res = await busService.getBusId(idB);
            setDataBus(res.data);
        } catch (error) {
            Utils.errorPage(error);
        } 
    }

    useEffect(() => {
        setIdbus(idB);
        console.log("dataBus dataBus :",dataBus)
        if (showModal) {
            getBusId(idB);
        }
    }, [idB, showModal]); // Ajout de showModal comme dépendance

    return(
        <div className=''>
            {showModal && (
                <div className="modal-overlay" >
                    <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
                        <div className="">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">BUS 184</h5>
                                <i onClick={closeModal} style={{ cursor: 'pointer', color: 'red' }}><FaTimes /></i>
                            </div>
                            <div className="modal-body">
                                <div className='content-bus'>
                                    <div className='image-bus'>
                                        <img src={process.env.PUBLIC_URL + `./media/bus/15.png`} alt='15' />
                                    </div>
                                    <div className='text-bus'>
                                        <p>Bus : {dataBus.bus}</p>
                                        <p>Matricule : {dataBus.matricule}</p>
                                        <p>Num : {dataBus.num}</p>
                                        <p>Primus / Terminus : {dataBus.primus} / {dataBus.terminus}</p>
                                    </div>
                                </div>
                                <div className='map-bus'>
                                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                        <MapBus dataBus={dataBus}/>
                                    </MapContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>  
    )
}

export default ClientBus;