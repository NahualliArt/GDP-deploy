/*import React, {useState} from 'react';*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import '../styles/App.scss';
import '../styles/NavBar.scss';
/*import { IconContext } from 'react-icons';*/
import * as FaIcons from "react-icons/fa/index"; 
import * as SiIcon from "react-icons/si";
import * as RiIcon from "react-icons/ri";   
import ENG from '../assets/img/ENG.png';
import SPA from '../assets/img/SPA.png';


function NavBar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    /**const [sideBar, setSiderbar] = useState(false)
    const showSidebar = () => setSiderbar(!sideBar)**/

    return (
        <>
            <div className="contenderMenu">
                <div className="language">
                    <img src={SPA} onClick={() => changeLanguage('ESP')} style={{'pointer-events': "all"}} alt="Boton para lenguaje Español"/>
                    <img src={ENG} onClick={() => changeLanguage('ENG')} style={{'pointer-events': "all"}} alt="Button for English Language"/>
                </div>
                <div  className="menuLinks">
                        <ul>
                            <Link to="/" className="linksMenu" activeClassName="selected"><li>GDPMX</li></Link>
                            <Link to="/aboutUs" className="linksMenu" activeClassName="selected"><li>{t("menu.2")}</li></Link>
                            <Link to="/classes" className="linksMenu" activeClassName="selected"><li>{t("menu.3")}</li></Link>
                            <Link to="/contact" className="linksMenu" activeClassName="selected"><li>{t("menu.4")}</li></Link>
                        </ul>
                </div>
                <div className="iconsSocials">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/gubadoceparesgdl/"><RiIcon.RiInstagramFill/></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCGJUxHLd1JrWiTo8hUzn_oQ"><FaIcons.FaYoutube/></a>
                        </li>
                        <li>
                            <a href="https://t.me/gubadoceparesgdl"><RiIcon.RiTelegramFill/></a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@nahualliart?"><SiIcon.SiTiktok/></a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NavBar;

