import React, { useState } from "react";
import { FaTrash,FaPen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ListController = () => {
    const[dataController,setDataController]=useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAllController = async () => {
        // const response = await axios.get("http://localhost:8000/profs/")
        // if(response.status === 200){
        //     setDataController(response.data.controller)
        // }
    }
    return (
        <>
            <div className="navbarPage">
                <div className='titre-page'>Controlleur</div>
                <div><button className='button is-success' variant="primary" onClick={handleShow} >Nouveau controlleur</button></div>
            </div>
            {/* {Array.isArray(dataProf) && dataProf.length > 0 ? ( */}
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
                        <tr>
                            <td>controlleur 1</td>
                            <td>matricule 1</td>
                            <td><button className="btn btn-success" variant="primary" onClick={handleShow} ><FaPen/></button></td>
                            <td><button className="btn btn-danger"><FaTrash/></button></td>
                        </tr>
                        {/* { dataBus.map((bus) => (
                            <tr key={bus.id}>
                                <td>{bus.nom}</td>
                                <td>{bus.matricule}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            {/* ) : (
                <div>Aucun bus disponible.</div>
            )} */}

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
                <h5 className="text-center  p-3 mb-2" style={{fontSize:"27px"}} > FORMULAIRE POUR LE CONTROLLEUR: </h5>
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

export default ListController;