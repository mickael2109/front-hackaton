import React, { useEffect, useState } from "react";
import { FaTrash,FaPen } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaLock, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios'
import { Navigate } from "react-router-dom";

export const ListBus = () => {
    const [dataBus, setDataBus] = useState([]);
    const getAllBus= async()=>{
        const response = await axios.get("http://localhost:5000/bus/")
        if(response.status === 200){
            setDataBus(response.data.bus) 
            console.log(response.data)
           
                   
        }
    }
    
    const deleteBus = async(id) => {
        //     try {
        //         const reponse = await axios.delete(`http://localhost:5000/clients/${id}`)
        //         if(reponse.data.messageSucces){
        //             Swal.fire({ icon: 'success', title: 'Message succès', text: reponse.data.messageSucces, });
        //             getAllProf()  
        //         }else if(reponse.data.messageError){
        //             Swal.fire({ icon: 'error', title: 'Erreur!', text: reponse.data.messageError, });
        //         }
        //    } catch (error) {
        //         Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
        //    }
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
                    deleteBus(id)
                }
            });           
    }

    useEffect(() => {
        getAllBus()
    }, [])
    

    return (
        <div className='all-client'>


            {Array.isArray(dataBus) && dataBus.length > 0 ? (
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
                        {  dataProf.map((bus) => (
                            <tr key={bus.id}>
                            <td>{bus.id}</td>
                            <td>{bus.nom}</td>
                            <td>{bus.matricule}</td>
                            <td><Link to={`/admin/bus/profileBus/${bus.id}`}><i><FaEye/></i></Link></td>
                            <td><Link to={`/admin/bus/updateBus/${bus.id}`} ><i><FaEdit/></i></Link></td>
                            <td><i onClick={() => actionButton(bus.id)}><FaTrash/></i></td>
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

export const addEditBus = () => {

    const {id} = useParams()
    const [bus, setBus] = useState({
        nom: '',  matricule: ''
    })

    
    const addBus = async () => {
        try {
            await axios.put('http://localhost:5000/bus/createBus', 
            {
                "nom": bus.nom,
                "email": bus.matricule,
                "idStatu": 1,
                "typeBusId": 1
            },{
                headers: {"Content-Type": "multipart/form-data"}
            }).then(res=>{
                    Utils.sucess("Votre compte est bien enregistrée!")
            })
            .catch((error) => {
                Utils.errorPage(error.response.data.message)
            })
            } catch (error) {
                Utils.errorPage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.')
        }
    }


    const actionButton = async(e) => {
        e.preventDefault()
        Swal.fire({
            title: `Voulez-vous vraiment ${id ? "modifier": "ajouter"} ce nouveau bus?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText:  `${id ? "Modifier": "Ajouter"}`,
            denyButtonText: "Annuler",
            allowEscapeKey: false,
            allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
        
                    addBus()
                    Navigate("/admin/bus")
                }
            }); 
    }

        
    return (
        <div className='authentification'>
            <form onSubmit={actionButton}>
                <div className='input-auth'>
                    <div className="control">
                        <i><MdDriveFileRenameOutline /></i>
                        <input type="text" value={bus.nom} onChange={(e) => setBus({...bus, nom: e.target.value})} className='input' placeholder="Nom" />
                    </div>
                    <div className="control">
                        <i><MdEmail/></i>
                        <input type="text" value={bus.matricule} onChange={(e) => setBus({...bus, matricule: e.target.value})} className='input' placeholder="Matricule" />
                    </div>

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
    )
};

export const updateBus = () => {

    const {id} = useParams()
    const [bus, setBus] = useState({
        nom: '',  matricule: ''
    })

    const updateBus = async(id) => {
        e.preventDefault()
        try {
            const rep = await axios.patch(`http://localhost:5000/bus/updateBus`, 
            {
                "nom": bus.nom,
                "email": bus.matricule,
                "id": id
            },{
                headers: {"Content-Type": "multipart/form-data"}
            }).then(res=>{
                    Utils.sucess("Votre compte est bien enregistrée!")
            })
            .catch((error) => {
                Utils.errorPage(error.response.data.message)
            })
        } catch (error) {
            Utils.errorPage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.')
        }

    }

    const actionButton = async(e) => {
        e.preventDefault()
        Swal.fire({
            title: `Voulez-vous vraiment ${id ? "modifier": "ajouter"} ce nouveau bus?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText:  `${id ? "Modifier": "Ajouter"}`,
            denyButtonText: "Annuler",
            allowEscapeKey: false,
            allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                        updateBus(id)
                    
                        Navigate("/admin/bus")
                }
            }); 
    }

        
    return (
        <div className='authentification'>
            <form onSubmit={actionButton}>
                <div className='input-auth'>
                    <div className="control">
                        <i><MdDriveFileRenameOutline /></i>
                        <input type="text" value={bus.nom} onChange={(e) => setBus({...bus, nom: e.target.value})} className='input' placeholder="Nom" />
                    </div>
                    <div className="control">
                        <i><MdEmail/></i>
                        <input type="text" value={bus.matricule} onChange={(e) => setBus({...bus, matricule: e.target.value})} className='input' placeholder="Email" />
                    </div>

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
    )
};