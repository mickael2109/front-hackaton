import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Check = () => {
    const check = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/arret/addPersonne',
            {
                "arretId": 1,
                "typeBusId": 1
            }, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(res => {
                Utils.sucess("Votre compte est bien enregistré !");
                window.location.href = '/controller';
            })
                .catch((error) => {
                    Utils.errorPage(error.response.data.message);
                });
        } catch (error) {
            Utils.errorPage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
        }
    };

    const [dataBus, setDataBus] = useState([]);
    const [dataArret, setDataArret] = useState([])
    const [loading, setLoading] = useState(true);
    const tokens = localStorage.getItem('token');
    const [idArret, setIdArret] = useState('');
    const [typeBusId, setTypeBusId] = useState('');

    const getAllBus = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/bus/getAllBus')
            // console.log("res : ", response.data)
            setDataBus(response.data.bus);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la connexion.', error);
        } finally {
            setLoading(false);
        }
    };

    const getArretByToken = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/arret/getArretByToken', {
                "token": tokens,
            });
            setDataArret(response.data);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la connexion.', error);
            // Gérer les erreurs
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getAllBus();
        getArretByToken()
    }, [tokens, idArret, typeBusId]);

    return (
        <div className='check'>
            <div className='titre-check'><span>CONTROLLEUR</span></div>
            <div className='liste-arret'>
                <div className='image-bus'>
                    <img src={process.env.PUBLIC_URL + `./media/gare/Soarano.jpg`} alt='logo-images' />
                    <p>Arret {dataArret.nomArret}</p>
                </div>
                <div className='list-arret-bus'>
                    {
                        loading ? (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                            </div>
                        ) : (
                            <>
                                {
                                    dataBus.map((busItem, index) => (
                                        <Link to='' key={index} onClick={() => {
                                            setIdArret(busItem.id);
                                            setTypeBusId(busItem.nom);
                                            // removePersonne();
                                        }}>
                                            <div className="card-item-bus">
                                                <div className="card-image-bus">
                                                    <img src={process.env.PUBLIC_URL + `./media/bus/109.png`} alt='Ampefiloha' />
                                                </div>
                                                <div className="card-body-bus">
                                                    <div className="card-title-bus">
                                                        <h4>{busItem.nom}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

const ModalBus = ({ showModal, closeModal, idB }) => {

    useEffect(() => {
       
    }, [idB, showModal]); // Ajout de showModal comme dépendance

    return(
        <div className=''>
            {showModal && (
                <div className="modal-overlay" >
                    <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
                        <div className="">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">CHECKOUT</h5>
                                <i onClick={closeModal} style={{ cursor: 'pointer', color: 'red' }}><FaTimes /></i>
                            </div>
                            <div className="modal-body">
                                <div className='content-bus'>
                                    <div className='image-bus'>
                                        <img src={process.env.PUBLIC_URL + `./media/bus/15.png`} alt='15' />
                                    </div>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>  
    )
}


export default Check;


