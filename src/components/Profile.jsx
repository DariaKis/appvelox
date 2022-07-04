import React from "react";
import Card from "./Card";
import Header from "./Header";
import InfoCard from "./InfoCard";
import {Link} from "react-router-dom";




const Profile=({doctors, removeItem})=>{

    const doctor=doctors.map(doctor => doctor);

    return (
        <section className="profile__block">
            <Header/>
            <div className="profile__main">
                <div>
                    <h1 className="profile__title">Записи на прием</h1>
                    {doctors.length >=1 &&
                        <div className="profile__card">
                            <Card doctor={doctor[0]} key={doctor.id} removeItem={removeItem}/>
                            {doctors.length > 1 &&
                                <div className="profile__more">
                                    <Card doctor={doctor[1]} key={doctor.id} removeItem={removeItem}/>
                                    <div className="more">
                                        Еще {doctors.length - 2} записи<br/>
                                        <Link className="profile__link" to="/admission">Подробнее</Link>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {doctors.length<1 &&
                        <div className="profile__sub">
                            <Link className="profile__link" to="/admission">Подробнее</Link>
                        </div>
                    }

                </div>
                <InfoCard/>
            </div>
        </section>
    )
};
export default Profile;