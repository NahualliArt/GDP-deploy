/*import React, {useState} from 'react';*/
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/App.scss';
import '../styles/Footer.scss';
 
function Footer (){

    const { t } = useTranslation();

    return(
        <>
            <div className="contenderFooter">
                <h3>{t('footer')}</h3>
            </div>
        </>
    )
}

export default Footer;