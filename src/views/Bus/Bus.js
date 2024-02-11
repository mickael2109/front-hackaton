import React, { useState } from 'react';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';
import { Link } from 'react-router-dom';

const Check = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    const createCompte = async (e) => {
        e.preventDefault();
        try {   
            await axios.post('http://localhost:5000/arret/removePersonne',
                {
                    "arretId": 1,
                    "typeBusId": 1,
                    "nb": 1
                }, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(res => {
                Utils.sucess("Votre compte est bien enregistré !");
                window.location.href = '/';
            })
                .catch((error) => {
                    Utils.errorPage(error.response.data.message);
                });
        } catch (error) {
            Utils.errorPage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
        }
    };

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
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Ampefiloha.jpg`} alt='Ampefiloha' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Mahamasina</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Ampefiloha.jpg`} alt='Ampefiloha' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Apefiloha</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Androndrakely.jpg`} alt='Androndrakely' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Androndrakely</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Anosibe.jpg`} alt='Anosibe' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Anosibe</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Soanierana.jpg`} alt='Ampefiloha' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Soanierana</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="card-item">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + `./media/gare/Soarano.jpg`} alt='Soarano' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Soarano</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <form onSubmit={createCompte} className='check-form'>
                <button className='check-button'>CHECKER</button>
            </form> */}
        </div>
        
    );
};

export default Check;


