/*import React, {useState} from 'react';
*/
import React, {useRef} from 'react';
import { useTranslation} from 'react-i18next';
import '../styles/SliderInstructors.scss';
import imgAbigail from '../assets/img/abigailP.png'; 
import imgYasmin from '../assets/img/yasmin.png';
import imgCarlos from '../assets/img/carlos.png';
import ArrowLeft from '../assets/img/arrowLeft.png';
import ArrowRight from '../assets/img/arrowRight.png';
import * as FaIcons from "react-icons/fa/index"; 

const  SliderInstructors = () => {


    const {t} = useTranslation();
    const slideshow = useRef(null);

    const siguiente = () => {
        //Comprobamos que el slidershow tenga elementos
        if(slideshow.current.children.length > 0){
            //Obtenemos el primer elemento
            const primerElemento = slideshow.current.children[0];
            //Creamos una trancision
            slideshow.current.style.transition = `500ms ease-out all`;
            //Le decimos cuanto debe moverse
            const sizeSlide = slideshow.current.children[0].offsetWidth;
            //Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
            //creamos una constante que ponga el slide que desaparece al final de la fila, así se seguiran moviendo todos
            const transicion = () => {
                //Reiniciamos la posicion del Slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translate(0)`;

                //Tomamos el primero elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
                
             };
             //Añadimos un eventListener para decirle a la máquina cuando mover el slider
             slideshow.current.addEventListener('transitionend', transicion);
        }
        
    };

    const anterior = () => {
        if( slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];

            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const sizeSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
				slideshow.current.style.transition = `500ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
        }
    };


    //falta el autoplay

    

    return(
        <>  
            <div className="contenedorPrincipal" id="contenedorPrincipal">

                {/* Contenedor */}
                <div className="contenedorSlideshow" ref={slideshow}>
                    <div className="slider" id="slider1">
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

                    <div className="slider" id="slider2">
                        <img src={imgYasmin} alt="Yasmin Rangel"/>
                        <h3>Yasmin Rangel</h3>
                        <p>{t('about.yasminText')}</p>
                        {/*<div className="socialsInstructors">
                            <FaIcons.FaWhatsappSquare/>
                        </div>*/}
                    </div>

                    <div className="slider" id="slider3">
                        <img src={imgCarlos} alt="Juan Carlos Reyes"/>
                        <h3>J. Carlos Reyes</h3>
                        <p>{t('about.carlosText')}</p>
                        {/*<div className="socialsInstructors">
                            <FaIcons.FaWhatsappSquare/>
                        </div>*/}
                    </div>
                </div>

                {/* Controles */}
                <div className="controls">
                    <img onClick={anterior} src={ArrowLeft} style={{'pointer-events': "all"}} alt="Before"/>
                    <img onClick={siguiente} src={ArrowRight} style={{'pointer-events': "all"}} alt="After"/>
                </div>
            </div>
        </>
    )
}


export default SliderInstructors;