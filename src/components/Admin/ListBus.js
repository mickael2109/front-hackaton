import React, { useEffect, useState } from "react";
import { FaTrash,FaPen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const ListBus = () => {
    const [dataBus, setDataBus] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedBus, setSelectedBus] = useState(null);

    const handleClose = () => {
        setShow(false);
        setSelectedBus(null);
    };

    const handleShow = (bus) => {
        setSelectedBus(bus);
        setShow(true);
    };
    const getAllBus= async()=>{
        const response = await axios.get("http://localhost:5000/bus/")
        if(response.status === 200){
        
            setDataBus(response.data.bus) 
            console.log(response.data)
           
                   
        }
    }

    const handleSave = async () => {
        if (selectedBus) {
            // Logique pour la modification (envoyer une requête PUT à votre API)
            // Mettez à jour votre base de données avec les nouvelles valeurs.
            // const response = await axios.put(`http://localhost:8000/bus/${selectedBus.id}`, { nom: selectedBus.nom, matricule: selectedBus.matricule });
            // Mettez à jour state ou effectuez d'autres actions nécessaires après la modification.
        } else {
            // Logique pour l'ajout (envoyer une requête POST à votre API)
            // const response = await axios.post("http://localhost:8000/bus/", { nom: nomDuNouveauBus, matricule: matriculeDuNouveauBus });
            // Ajoutez le nouveau bus à votre base de données.
        }
        handleClose();
        // Rafraîchissez la liste des bus après l'ajout ou la modification.
        getAllBus();
    };

    const handleDelete = async () => {
        if (selectedBus) {
            // Logique pour la suppression (envoyer une requête DELETE à votre API)
            // const response = await axios.delete(`http://localhost:8000/bus/${selectedBus.id}`);
            // Supprimez le bus de votre base de données.
            // Mettez à jour state ou effectuez d'autres actions nécessaires après la suppression.
            handleClose();
            // Rafraîchissez la liste des bus après la suppression.
            getAllBus();
        }
    };
    useEffect(() => {
        getAllBus()
    }, [])

    return (
        <>
            <div className="navbarPage">
                <div className='titre-page'><h3>Bus</h3></div>
                <div><button className='button is-success' variant="primary" onClick={handleShow} >Nouveau bus</button></div>
            </div>
            {Array.isArray(dataBus) && dataBus.length > 0 ? (
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Matricule</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>bus 1</td>
                            <td>matricule 1</td>
                            <td><button className="btn btn-success" variant="primary" onClick={() => handleShow(bus)} ><FaPen/></button></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(bus.id)}><FaTrash/></button></td>
                        </tr> */}
                        { dataBus.map((bus) => (
                            <tr key={bus.id}>
                                <td>{bus.nom}</td>
                                <td>{bus.matricule}</td>
                                <td><button className="btn btn-success" variant="primary" onClick={() => handleShow(bus)} ><FaPen/></button></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(bus.id)}><FaTrash/></button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
             ) : (
                <div>Aucun bus disponible.</div>
            )} 

            <Modal
                key={Math.random()} 
                show={show}
                onHide={handleClose} 
                backdrop="static" 
                keyboard={false} 
                size="xl"
                dialogClassName="custom-modal-dialog"
                fade={false}
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>FORMULAIRE POUR LE BUS</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                <h5 className="text-center  p-3 mb-2" style={{fontSize:"27px"}} > FORMULAIRE POUR LE BUS: </h5>
                <div className="mt-5 p-4">
                <div className="field">
                    <label className="label">Nom du bus</label>
                    <div className="control">
                        <input class="input" type="text" placeholder="Nom"/>
                    </div>
                </div> 
                <div className="field">
                    <label className="label">Matricule du bus</label>
                    <div className="control">
                        <input class="input" type="text" placeholder="Matricule"/>
                    </div>
                </div> 
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Valider</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ListBus;