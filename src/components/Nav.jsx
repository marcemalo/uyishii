import React from 'react'
import { useTranslation } from 'react-i18next';
import Logo from "../img/Group 5.svg"
import "./Nav.css"

const Nav = () => {

    const [t, i18n] = useTranslation();


    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                         <h1 className='nav__h1'>{t("greet")}</h1>
                    </div>
                    <div>
                        <select defaultValue={i18n.language} onChange={handleChangeLanguage}>
                            <option value="uz">O'zbekcha</option>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav