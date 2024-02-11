import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Utils } from '../../_utils/Utils';

const Bus = () => {
    const [dataArret, setDataArret] = useState([]);
    const [loading, setLoading] = useState(true);
    const tokens = localStorage.getItem('token');
    const [idArret, setIdArret] = useState('');
    const [typeBusId, setTypeBusId] = useState('');
    const options = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

    const removePersonne = async () => {
        const { value: selectedNumber } = await Swal.fire({
            title: 'Nombre des nouveaux passagers:',
            input: 'select',
            inputOptions: options.reduce((acc, val) => {
                acc[val] = val;
                return acc;
            }, {}),
            inputPlaceholder: 'Sélectionnez un nombre',
            showCancelButton: true,
        });

        if (selectedNumber) {
            try {
                await axios.post('http://localhost:5000/arret/removePersonne', 
                {
                    "arretId": idArret,
                    "typeBusId": typeBusId,
                    "nb": selectedNumber
                }).then(res=>{
                      Utils.sucess(`Voyageur ${selectedNumber} bien checké`) 
                      window.location.href='/bus'
                    //   const token = res.data.access_token;
                    //   localStorage.setItem('token', token);  
                    //   if(res.data.role === 1){
                    //     
                    //   }else if(res.data.role === 2){
                    //     window.location.href='/controller'
                    //   }else if(res.data.role === 3){
                    //     window.location.href='/bus'
                    //   }        
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

    const getArretByToken = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/bus/getArretBus', {
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
        getArretByToken();
    }, [tokens, idArret, typeBusId]);

    return (
        <div className='check'>
            <div className='titre-check'><span>accueil</span></div>
            <div className='liste-arret'>
                <div className='image-bus'>
                    <img src={process.env.PUBLIC_URL + `./media/bus/109.png`} alt='logo-images' />
                    <p>Bus 109</p>
                    <p>Amboitrarahaba - 67Ha</p>
                    <p>6638 TBB</p>
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
                                    dataArret.map((arretItem, index) => (
                                        <Link to='' key={index} onClick={() => {
                                            setIdArret(arretItem.id);
                                            setTypeBusId(arretItem.typeBusId);
                                            removePersonne();
                                        }}>
                                            <div className="card-item">
                                                <div className="card-image">
                                                    <img src={process.env.PUBLIC_URL + `./media/gare/Ampefiloha.jpg`} alt='Ampefiloha' />
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h4>{arretItem.arret}</h4>
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

export default Bus;
