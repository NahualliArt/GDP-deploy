import React from 'react';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/AboutUs.scss';
import '../styles/SliderInstructors.scss';
import imgMiguel from '../assets/img/miguelP.png';
import * as FaIcons from "react-icons/fa/index"; 
import SliderInstructors from '../components/SliderInstructors';

import '../styles/SliderInstructors.scss';
import imgAbigail from '../assets/img/abigailP.png'; 



function AboutUs() {

    const {t} = useTranslation();
    return (
        <>
           <div className="containerAbout">
               <div className="titleAbout">
                   <h1>{t('about.titlePage')}</h1>
                   <h4>{t('about.introPage')}</h4>
               </div>
               
                    <div className="miguelAbout">
                            <img src={imgMiguel} alt="Miguel Arroyo"/>
                            <div>
                                <div className="aboutMiguel">   
                                    <h3>{t('about.miguelTitle')}</h3>
                                    <h2>Miguel Arroyo -  Master</h2>
                                    <p>{t('about.migelText1')}</p>
                                    <p>{t('about.migelText2')}</p>
                                </div>
                                <div className="socialsMiguel">
                                    <a href="https://www.facebook.com/miguel.arroyo.92">
                                        <FaIcons.FaFacebookSquare/>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="instructorsAbout">
                        <h2>{t('about.instructor')}</h2>
                        <div className="infoInstructors">
                            <div className="slider">
                                <img src={imgAbigail} alt="Abigail Perez"/>
                                <h3>Abigail Pérez</h3>
                                <p>{t('about.abigailText')}</p>
                                <div className="socialsInstructors">
                                    <a href="https://www.facebook.com/gubadoceparesgdl">
                                        <FaIcons.FaFacebookSquare/>
                                    </a>
                                    <a href="https://wa.link/zmgfv8">
                                        <FaIcons.FaWhatsappSquare/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
               
           </div>
        </>
    )
}

export default AboutUs;