import React, { useState } from "react";
import { FaTrash,FaPen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const ListController = () => {
    const [dataControl, setDataControl] = useState([]);

    const getAllController= async()=>{
        // const response = await axios.get("http://localhost:5000/controller/")
        // if(response.status === 200){
        //     setDataBus(response.data.controller) 
        //     console.log(response.data)
           
                   
        // }
    }
    const deleteController = async(id) => {
            try {
                const reponse = await axios.delete(`http://localhost:5000/controller/${id}`)
                if(reponse.data.messageSucces){
                    Swal.fire({ icon: 'success', title: 'Message succès', text: reponse.data.messageSucces, });
                    getAllProf()  
                }else if(reponse.data.messageError){
                    Swal.fire({ icon: 'error', title: 'Erreur!', text: reponse.data.messageError, });
                }
           } catch (error) {
                Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
           }
    }
   
    const actionButton = async(id) => {

        Swal.fire({
            title: `Êtes-vous sure de vouloir supprimer cette prof?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText:  `Supprimer`,
            denyButtonText: "Annuler",
            allowEscapeKey: false,
            allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteController(id)
                }
            });           
    }

    useEffect(() => {
        getAllController()
    }, [])
    return (
        <div className='all-client'>
            {Array.isArray(dataControl) && dataControl.length > 0 ? (
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Matricule</th>
                            <th>Voir</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  dataControl.map((controller) => (
                            <tr key={controller.id}>
                            <td>{controller.id}</td>
                            <td>{controller.nom}</td>
                            <td>{controller.matricule}</td>
                            <td><Link to={`/admin/controller/profileController/${controller.id}`}></Link></td>
                            <td><Link to={`/admin/controller/updateController/${controller.id}`}></Link></td>
                            <td><i onClick={() => actionButton(controller.id)}><FaTrash/></i></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>Aucun Prof disponible.</div>
            )}
        

        </div>
    );
};

export const AddEditController = () => {
    const {id} = useParams()
    const [controller, setController] = useState({
        nom: '',  adresse: ''
    })
    const navigate = useNavigate()
    
    const addController = async(data) => {
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

    const updateController = async(data, id) => {
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
        
        if(!controller.nom || !controller.adresse ){
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez complèter les champs!', });
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
                            formData.append('nom', controller.nom)
                            formData.append('adresse', controller.adresse)
                    
                            if(!id){
                                addController(formData)
                            }else{
                                updateController(formData, id)
                            }
                           
                            navigate("/admin/client")
                        }
                    });
        }

    }

    return (
        <div className=''>
            <form onSubmit={actionButton}> 
                <div className='formulaire'>
                    <div className="field">
                        <label className='label'>Nom</label>
                        <div className="control">
                            <input type='text' value={controller.nom} onChange={(e) => setController({...controller, nom: e.target.value})} className='input' placeholder='Nom du Client'/>
                        </div>
                    </div>
                
                    <div className="field">
                        <label className='label'>Adresse</label>
                        <div className="control">
                            <input type='text' value={controller.adresse} onChange={(e) => setController({...controller, adresse: e.target.value})} className='input' placeholder='Adresse du Client'/>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

