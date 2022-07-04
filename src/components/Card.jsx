import React from "react";
import moment from "moment";

const Card=({removeItem, doctor})=>{
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const dayOfWeek= days[new Date(doctor.data).getDay()];


    return (
        <section className="card" key={doctor.id}>
            <div className="card__form">
                <div className="card__title">
                    {dayOfWeek} {moment(doctor.data).format('DD.MM.YY | HH:mm')}
                </div>
                <div className="card__subtitle">{doctor.hospital}</div>
                <div className="card__doctor">
                    <img alt="" src={doctor.img}/>
                    <div className="about__doctor">
                        <div className="doctor__name" >{doctor.name}</div>
                        <div className="doctor__specialization">{doctor.specialization}</div>
                    </div>
                    <button className="cancel" key={doctor.id}  id={doctor.id} onClick={()=>removeItem(doctor.id)}>Отменить</button>
                </div>

            </div>
        </section>

    );
};
export default Card;