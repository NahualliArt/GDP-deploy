import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/App.scss';
import '../styles/Contact.scss';
import * as FaIcons from "react-icons/fa/index"; 
import * as SiIcon from "react-icons/si";
import * as RiIcon from "react-icons/ri";


function Contact() {

    const { t } = useTranslation();

    return (
        <>
        <div className="containerContact">
            <div className="titleContact">
               <h1>{t('contact.title')}</h1>
            </div>
            <div className="writeUs">
                <h3>{t('contact.writeUs')}</h3>
                <div>
                   <ul>
                       <li>
                            <SiIcon.SiMailDotRu className="iconWrite"/>
                            <a href="mailto:contact@gubadocepares.mx">
                               {t('contact.Email')}
                            </a>
                        </li>
                       <li>
                            <RiIcon.RiWhatsappFill className="iconWrite"/>
                            <a href="https://wa.link/zmgfv8">
                               {t('contact.Whats')}
                            </a>
                        </li>
                       <li>
                            <RiIcon.RiMessengerFill className="iconWrite"/>
                            <a href="http://">
                               {t('contact.Mess')}
                            </a>
                        </li>
                   </ul>
                </div>
            </div>
            <div className="mapsClasses">
                <div className="agsGps">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624.9903475293!2d-102.29963006044919!3d21.852760200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edc142610001%3A0x10feebed4d9a79cf!2sVALHALLA%20GYM!5e0!3m2!1sen!2smx!4v1627599147283!5m2!1sen!2smx" 
                        width="328" 
                        height="133" 
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Aguascalientes GPS"/>
                    <h3>AGUASCALIENTES</h3>
                    <div className="socialsClass">
                        <a href="https://www.facebook.com/xvalhallagym"><FaIcons.FaFacebookSquare className="iconWrite"/></a>
                        {/*<a href="http://"><RiIcon.RiInstagramFill className="iconWrite"/></a>*/}
                    </div>
                </div>
                <div className="gdlGps">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.4585468039977!2d-103.35577078604135!3d20.65091550594766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3847b435bdd%3A0x7699f7744b1e4a77!2sGuba%20Doce%20Pares%20Gdl!5e0!3m2!1sen!2smx!4v1627603237566!5m2!1sen!2smx" 
                        width="328" 
                        height="133" 
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Guadalajara GPS"/>
                    <h3>GAUDALAJARA</h3>
                    <div className="socialsClass">
                        <a href="https://www.instagram.com/gubadoceparesgdl/"><RiIcon.RiInstagramFill className="iconWrite"/></a>
                        <a href="https://www.tiktok.com/@nahualliart?"><SiIcon.SiTiktok className="iconWrite"/></a>
                    </div> 
                </div>   
            </div>     
        </div>
        </>
    )
}

export default Contact;
