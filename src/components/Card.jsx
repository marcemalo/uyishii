import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Card.css"
import avatar from "../img/Group 11.png"
import imgg from "../img/Rectangle 7.png"
import imgp from "../img/Rectangle 8.png"
import imgps from "../img/Rectangle 9.png"
import { NavLink } from 'react-router-dom';

const Card = () => {
    const [t] = useTranslation();


  return (
   <div className="card__section">
    <div className="container">
        <div className="card__wrapper">
            <div className="card">
                <h1 className='card__h1'>{t("tect")}</h1>
                <p className='card__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc</p>
                <img className='card__img' src={avatar} alt="" />
                <h1  className='card__h8'>{t("tect")}</h1>
                <p className='card__pp'>Lorem ipsum dolor sit amet, consectetur </p>
            </div>

            <div className="card">
                <NavLink to="/single"><img src={imgg} alt="" /></NavLink>
                <h1 className='card__h1'>{t("tect")}</h1>
                <p className='card__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc</p>
                <img className='card__img' src={avatar} alt="" />
            </div>

            <div className="card">
            <img className='card__img' src={imgp} alt="" />
                <h1 className='card__h1'>{t("tect")}</h1>


                <img className='card__img' src={imgps} alt="" />
                <h1 className='card__h1'>{t("tect")}</h1>
              
                
                
            </div>


            <div className="card">
                <h1 className='card__h1'>{t("tect")}</h1>
                <p className='card__p'>Lorem ipsum dolor sit amet, consectetur </p>
                <img className='card__img' src={avatar} alt="" />

                <h1 className='card__h1'>{t("tect")}</h1>
                <p className='card__p'>Lorem ipsum dolor sit amet, consectetur </p>
                <img className='card__img' src={avatar} alt="" />
                
            </div>



            
        </div>
    </div>
   </div>
  )
}

export default Card