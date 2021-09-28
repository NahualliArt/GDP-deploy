import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/App.scss';
import '../styles/Home.scss';
import imgHome from '../assets/img/29.png';
import logoImg from '../assets/img/logo_gdl.png';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div className="containerHome">
                <div className="imageHome">
                    <img src={imgHome} className="desktopImg" alt="for decoration"/>
                    <img src={logoImg} className="responsiveImg" alt="Guba Doce Pares Mexico Logo" />

                </div>
                <div className="textHome">
                    <h1>{t("home.titlePage")}</h1>
                    <h3>{t("home.titleName")}</h3>
                </div>
            </div>
        </>
    )
}

export default Home;