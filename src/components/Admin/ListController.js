import React, { useState } from "react";
import { FaTrash,FaPen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ListController = () => {
    const[dataController,setDataController]=useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAllController = async () => {
        // const response = await axios.get("http://localhost:8000/controller/")
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
};

export const AddEditController = () => {
    const {id} = useParams()
    const [controller, setController] = useState({
        nom: '',  adresse: '', preview:''
    })
    const [profile, setProfile] = useState('')
    const navigate = useNavigate()

    const loadProfile = (e) =>{
        const image = e.target.files[0]
        if(image){
            setProfile(image)
            setProf({...prof, preview: URL.createObjectURL(image)})
        }
    }
    
    const addProf = async(data) => {
        // try {
        //     const rep =  await axios.post("http://localhost:5000/clients", data)
        //     if(rep.data.messageSucces){
        //         Swal.fire({ icon: 'success', title: 'Message succès', text: rep.data.messageSucces, });

        //     }else if(rep.data.messageError){
        //         Swal.fire({ icon: 'error', title: 'Erreur!', text: rep.data.messageError, });
        //     } 
        // } catch (error) {
        //     Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
        // }
    }

    const updateProf = async(data, id) => {
        // try {
        //     const rep = await axios.patch(`http://localhost:5000/clients/${id}`, data)
        //     if(rep.data.messageSucces){
        //         Swal.fire({ icon: 'success', title: 'Message succès', text: rep.data.messageSucces, });

        //     }else if(rep.data.messageError){
        //         Swal.fire({ icon: 'error', title: 'Erreur!', text: rep.data.messageError, });
        //     } 
        // } catch (error) {
        //     Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
        // }

    }

    const actionButton = async(e) => {
        e.preventDefault()
        
        if(!prof.nom || !prof.adresse ){
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez complèter les champs!', });
        }else{
            if(!profile){
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez insérer une image!', });
            }else{
                Swal.fire({
                    title: `Voulez-vous vraiment ${id ? "modifier": "ajouter"} ce nouveau client?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText:  `${id ? "Modifier": "Ajouter"}`,
                    denyButtonText: "Annuler",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const formData = new FormData()
                            formData.append('nom', prof.nom)
                            formData.append('adresse', prof.adresse)
                            formData.append('profile', profile)
                    
                            if(!id){
                                addProf(formData)
                            }else{
                                updateProf(formData, id)
                            }
                           
                            navigate("/admin/client")
                        }
                    }); 
            }
        }

    }

    return (
        <div className=''>
            <form onSubmit={actionButton}> 
                <div className='formulaire'>
                    <div className="field">
                        <label className='label'>Nom</label>
                        <div className="control">
                            <input type='text' value={prof.nom} onChange={(e) => setProf({...prof, nom: e.target.value})} className='input' placeholder='Nom du Client'/>
                        </div>
                    </div>
                
                    <div className="field">
                        <label className='label'>Adresse</label>
                        <div className="control">
                            <input type='text' value={prof.adresse} onChange={(e) => setProf({...prof, adresse: e.target.value})} className='input' placeholder='Adresse du Client'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Profile</label>
                        <div className="control">
                            <div className="file">
                                <label className='file-label'>
                                    <input type='file' className='file-input' onChange={loadProfile}/>
                                    <span className='file-cta'>
                                        <span className='file-label'>Choisir une image ...</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                   
                    {
                        prof.preview ? (
                            <figure className='image is-128x128'>
                                <img src={prof.preview} alt='Preview images' />
                            </figure>
                        ):(
                            ""
                        )
                    }
                    <div className="field btn">
                        <div className="control">
                            <input type='submit' value={id ? "Modifier": "Ajouter"} className='button is-success'/>
                        </div>
                        <div className="control">
                            <button type='reset' className='button is-danger'>Annuler</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

