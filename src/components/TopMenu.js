import React, {useState} from 'react';
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/TopMenu.scss';

import * as HiIcons from "react-icons/hi";  

import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';



function TopMenu() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (

        <>

            <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <HiIcons.HiMenuAlt3 className="iconSocials" onClick={showSidebar}/>
                    </Link>
            </div>

                        
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div className="nav-menu-items" onClick={showSidebar}>
                        <div className="option navbar-toggle">
                            <HiIcons.HiOutlineX className="iconSocials"/>
                        </div>
                        <div className="option">
                            <img src={SPA} onClick={() => changeLanguage('ESP')} style={{'pointer-events': "all"}} alt="Boton para lenguaje Español"/>
                        </div>
                        <div className="option">
                            <img src={ENG} onClick={() => changeLanguage('ENG')} style={{'pointer-events': "all"}} alt="Button for English Language"/>
                        </div>
                        <div className="option">
                            <a href="https://qrco.de/gdp_mx" className="optionTop" activeClassName="selected">
                                <HiIcons.HiOutlineShare className="iconSocials"/>
                            </a>
                        </div>
                    </div>
                </nav>
            
    </>
    )
}

export default TopMenu;

