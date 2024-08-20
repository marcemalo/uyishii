import React from 'react'
import { useTranslation } from 'react-i18next';
import imgpsss from "../img/Banner.png"
import "../components/sinle.css"

const Single = () => {

    const [t] = useTranslation();

    return (
        <div className="banner">
            <div className="container">
                <div className="baner__wrapper">
                         <div className="carlini">
                         <div className="baner__img">
                             <img src={imgpsss} alt="" />
                         </div>
                         <div className='baner__text'>
                           <h3 className='gh'> {t("kol")}</h3>
                         </div>
                         </div>
                </div>
            </div>
        </div>
    )
}

export default Single