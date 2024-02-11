import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

const Check = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
  
    // const check = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/arret/addPersonne',
    //         {
    //             "arretId": 1,
    //             "typeBusId": 1
    //         }, {
    //             headers: { "Content-Type": "multipart/form-data" }
    //         }).then(res => {
    //             Utils.sucess("Votre compte est bien enregistré !");
    //             window.location.href = '/controller';
    //         })
    //             .catch((error) => {
    //                 Utils.errorPage(error.response.data.message);
    //             });
    //     } catch (error) {
    //         Utils.errorPage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
    //     }
    // };

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
                                                openModal()
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
                                            <ModalCheck showModal={showModal} closeModal={closeModal} arretId={dataArret.arretId} typeBusId={busItem.id}/>
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

const ModalCheck = ({ showModal, closeModal, arretId, typeBusId }) => {

    console.log("arretId : ",arretId)
    console.log("typeBusId : ",typeBusId)
    const handleSubmit = async () => {
        try {
          await axios.post('http://localhost:5000/arret/addPersonne', 
          {
            "arretId": 1,
            "typeBusId": 1
          }).then(res=>{
                Utils.sucess("Checkout ok!") 
                // window.location.href='/controller'
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

    }, [showModal, typeBusId, arretId]); // Ajout de showModal comme dépendance

    return(
        <div className='modalcheck'>
            {showModal && (
                <form onSubmit= {handleSubmit}>
                    <div className="modal-overlay" >
                        <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
                            <div className="">
                                <div className="modal-headers">
                                    <h5 className="modal-title" id="staticBackdropLabel">CHECKOUT</h5>
                                    <i onClick={closeModal} style={{ cursor: 'pointer', color: 'red' }}><FaTimes /></i>
                                </div>
                                <div className="modal-body">
                                    <div className='content-bus'>
                                        <div className='image-bus'>
                                            <img src={process.env.PUBLIC_URL + `./media/pointer.jpg`} alt='15' />
                                        </div>
                                    </div>
                                    
                                </div>
                                <button type='submit'>Valider</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>  
    )
}


export default Check;


