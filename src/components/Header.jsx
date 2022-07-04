import React from "react";


const Header=()=>{
    return (
        <section className="header">
           <div className="header__title">
               <h3>Мой профиль</h3>
           </div>
            <div className="header__img">
                <img alt="" src={require('../img/searchIcon.png')}/>
                <img alt="" src={require('../img/bellIcon.png')}/>
                <img alt="" src={require('../img/eyeIcon.png')}/>
                <div className="loginImg">
                    <img alt="" src={require('../img/loginIcon.png')}/>
                </div>
                <img alt="" src={require('../img/arrowIcon.png')}/>
            </div>
        </section>
    )
};
export default Header;