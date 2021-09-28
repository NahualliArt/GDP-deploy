/*import React, {useState} from 'react';*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/BottomMenu.scss';
/*import { IconContext } from 'react-icons';*/
import * as FaIcons from "react-icons/fa/index"; 

import homeImg from '../assets/menuIcons/home.png';
import usImg from '../assets/menuIcons/us.png';
import clasesImg from '../assets/menuIcons/clases.png';
import contact from '../assets/menuIcons/contact.png';

function BottomMenu() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <>
            <div className="navigationBar">
                <Link to="/" className="option" activeClassName="selected">
                    <div>   
                        <img src={homeImg} alt="prueba" />
                        <p>GDPMX</p>
                    </div>
                </Link>

                <Link to="/aboutUs" className="option" activeClassName="selected">
                    <div>   
                        <img src={usImg} alt="prueba" />
                        <p>{t("menu.2")}</p>
                    </div>
                </Link>

                <Link to="/classes" className="option" activeClassName="selected">
                    <div>   
                        <img src={clasesImg} alt="prueba" />
                        <p>{t("menu.3")}</p>
                    </div>                            
                </Link>

                <Link to="/contact" className="option" activeClassName="selected">
                    <div>   
                        <img src={contact} alt="prueba" />
                        <p>{t("menu.5")}</p>
                    </div>
                </Link>
        </div>
    </>
    )
}

export default BottomMenu;

