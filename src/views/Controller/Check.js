import React from 'react';
import axios from 'axios';
import { Utils } from '../../_utils/Utils';

const Check = () => {
    const addPersonne = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/arret/addPersonne',
                {
                    "arretId": 1,
                    "typeBusId": 1
                }, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(res => {
                Utils.success("Votre compte est bien enregistré !");
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
            <form onSubmit={addPersonne} className='check-form'>
                <button className='check-button'>CHECKER</button>
            </form>
        </div>
        
    );
};

export default Check;
