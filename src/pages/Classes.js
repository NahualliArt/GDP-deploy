import React from 'react';
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/Classes.scss';
import img1 from '../assets/img/01-classes.png';
import img2 from '../assets/img/02-classes.png';
import img3 from '../assets/img/03-classes.png';
import img4 from '../assets/img/04-classes.png';
import img5 from '../assets/img/05-classes.png';
import img6 from '../assets/img/06-classes.png';
import img7 from '../assets/img/07-classes.png';

function Classes() {
    
    const { t } = useTranslation();
    return (
        <>
             <div className="containerClasses">
                <div className="titleClasses">
                    <h1>{t('classes.titlePage')}</h1>
                    <h4>{t('classes.introPage')}</h4>
                </div>
                <div className="galleryClasses">
                    <div className="section1">
                        <img src={img1} alt="Training Abigail with Miguel"/>
                        <img src={img2} alt="Training Abigail with Miguel"/>
                    </div>
                    <div className="section2">
                        <img src={img3} alt="Training Abigail with Miguel"/>
                        <img src={img4} alt="Training Abigail with Miguel"/>
                    </div>
                    <div className="section3">
                        <img src={img5} alt="Training Abigail with Miguel"/>
                    </div>
                    <div className="section4">
                        <img src={img6} alt="Training Abigail with Miguel"/>
                        <img src={img7} alt="Training Abigail with Miguel"/>
                    </div>
                </div>
                <div className="placesClassesSection">
                   <h4>{t('classes.info')}</h4>
                   
                        <p>AGUASCALIENTES</p>
                        <p>GAUDALAJARA</p>
                        <p>SALTILLO</p>
                   
                   <h4>{t('classes.info1')}</h4>
                </div>
                <div className="joinClasses">
                    <h1>{t('classes.joinTitle')}</h1>
                    <h4>{t('classes.joinText')}</h4>
                    <Link to="/contact" className="contactDiv">
                        <div><p>{t('classes.contact')}</p></div>
                    </Link>
                    
                </div>
             </div>
        </>
    )
}

export default Classes;