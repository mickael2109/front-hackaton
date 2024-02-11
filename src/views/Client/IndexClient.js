import React from 'react';
import { MdMeetingRoom } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaTachometerAlt } from 'react-icons/fa';

const IndexClient = () => {
    return (
        <div>
            <div className='content-index'>
                {/* ACCUEIL */}
                <div className='accueil'>
                    <div className='back-accueil'>
                        <img src="../media/background/wave(2).svg" alt="" className='imageback' />
                    </div>
                    <div className='accueil-text'>
                        <p className='titre'>Bus d'Antananarivo</p>
                        <p className='sous-titre'>creating websites that make you stop & stare</p>
                        <p className='txt'>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. 
                            Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. 
                        </p>
                    </div>
                    <div className='accueil-image'>
                        <img src='../media/bus/bus.gif' alt='accueil-images'/>
                    </div>

                    <div className='service'>
                        <div className='card-service'>
                            <div className='icon-service'><i><MdMeetingRoom/></i></div>
                            <div className='titre-service'><span>Gain du Temps</span></div>
                            <div className='text-service'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro, laborum fuga, nihil facilis vero blanditiis 
                                    perferendis maiores 
                                </p>
                            </div>
                        </div>
                        <div className='card-service'>
                            <div className='icon-service'><i><PiStudentFill/></i></div>
                            <div className='titre-service'><span>Sécurité</span></div>
                            <div className='text-service'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro, laborum fuga, nihil facilis vero blanditiis 
                                    perferendis maiores r
                                </p>
                            </div>
                        </div>
                        <div className='card-service'>
                            <div className='icon-service'><i><FaTachometerAlt/></i></div>
                            <div className='titre-service'><span>Rapidité</span></div>
                            <div className='text-service'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro, laborum fuga, nihil facilis vero blanditiis 
                                    perferendis maiores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <ul>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/controller'>Controller</Link></li>
                    <li><Link to='/bus'>Bus</Link></li>
                </ul>
            </div> */}
        </div>
    );
};

export default IndexClient;